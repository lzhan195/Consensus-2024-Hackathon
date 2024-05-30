// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
// import "hardhat/console.sol";

contract TrueMatch {
    struct Compliant {
        // The person who submit the compliant.
        address submitter;
        // Supporters are the group of peole who think the compliant is valid.
        address[] supporters;
        // Doubters are the group of people who think the compliant is invalid.
        address[] doubters;
        // supportersStake is the value that the supporters have put in this compliant.
        uint[] supportersStake;
        // doubtersStake is the value that the doubters have put in this compliant.
        uint[] doubtersStake;
        // Record when the compliant is issued. The compliant is only valid for pre-defined number of blocks.
        uint blockNum;
        string desc;
        bytes32 matchId;
    }

    struct MatchReq {
        address receiver;
        uint blockNum;
    }

    struct Match {
        address userFirst;
        address userSecond;
        bytes32 matchId;
        uint blockNum;
    }

    // Event indicating the user has been first created.
    event UserCreation(address indexed user);
    // Event indicating two users have been matched with each other.
    event MatchCreation(
        address indexed userOne,
        address userTwo,
        bytes32 matchId
    );

    // Measured by block number. It's used for judging whether a pending a Compliant is valid anymore.
    // If block.number - MatchReq.blockNum > compliantValidPeriod, then it's not valid.
    uint public compliantValidPeriod;
    uint public initialScore;
    // The minimum funds needed for the account the be eligible to use the app is:
    // factorA//(factorB + score[user]).
    uint public factorA;
    uint public factorB;
    // Records how much stakes left for a user.
    mapping(address => uint) public balances;
    mapping(address => uint) public scores;
    mapping(bytes32 => Compliant) public compliants;
    mapping(address => MatchReq[]) public pendingMatches;
    mapping(bytes32 => Match) public matches;
    mapping(address => bytes32[]) public userMatches;

    constructor(
        uint _compliantValidPeriod,
        uint _initialScore,
        uint _factorA,
        uint _factorB
    ) {
        compliantValidPeriod = _compliantValidPeriod;
        initialScore = _initialScore;
        factorA = _factorA;
        factorB = _factorB;
    }

    modifier enoughFunds() {
        address user = msg.sender;
        uint balance = balances[user];
        uint minimum = factorA / (factorB + scores[user]);
        require(balance >= minimum);
        _;
    }

    modifier userExists() {
        address user = msg.sender;
        require(balances[user] > 0);
        _;
    }

    // addBalance add funds to your account. It's also used as the entrypoint of creating a profile.
    function addBalance() public payable {
        address sender = msg.sender;
        uint curBalances = balances[sender];
        // New account, create the profile.
        if (curBalances == 0) {
            scores[sender] = initialScore;
            emit UserCreation(sender);
        }
        balances[sender] = curBalances + msg.value;
    }

    function getBalance(address user) external view returns (uint) {
        return balances[user];
    }

    function getScore(address user) external view returns (uint) {
        return scores[user];
    }

    function sendMatchRequest(
        address receiver
    ) public enoughFunds returns (bytes32) {
        address user = msg.sender;
        MatchReq[] memory receiverPending = pendingMatches[receiver];
        for (uint i = 0; i < receiverPending.length; i++) {
            // We found a match.
            if (receiverPending[i].receiver == user) {
                delete receiverPending[i];
                bytes32 matchHash = sha256(
                    abi.encode(msg.sender, receiver, block.number)
                );
                matches[matchHash] = Match({
                    userFirst: user,
                    userSecond: receiver,
                    matchId: matchHash,
                    blockNum: block.number
                });
                userMatches[user].push(matchHash);
                userMatches[receiver].push(matchHash);
                // Return two events which are indexed for both users.
                emit MatchCreation(user, receiver, matchHash);
                emit MatchCreation(receiver, user, matchHash);
                return matchHash;
            }
        }
        // Doesn't find a match, add to pending.
        MatchReq memory pending = MatchReq({
            receiver: receiver,
            blockNum: block.number
        });
        pendingMatches[user].push(pending);
        // Returns 0 if the request is still pending.
        return bytes32(0);
    }

    function sendcompliants(bytes32 matchId, string memory desc) public {
        Match memory currentReq = matches[matchId];
        address user = msg.sender;
        if (!(currentReq.userFirst == user || currentReq.userSecond == user)) {
            revert(
                "can't submit compliant to a match that doesn't belong to you"
            );
        }
        Compliant memory currentComp = compliants[matchId];
        if (currentComp.submitter == user) {
            revert("can't submit duplicated compliants");
        }
        address[] memory supporters;
        address[] memory doubters;
        uint[] memory supportersStake;
        uint[] memory doubtersStake;
        Compliant memory comp = Compliant({
            submitter: user,
            blockNum: block.number,
            supporters: supporters,
            doubters: doubters,
            supportersStake: supportersStake,
            doubtersStake: doubtersStake,
            desc: desc,
            matchId: matchId
        });
        compliants[matchId] = comp;
    }

    function verdictcompliant(
        bytes32 matchId,
        bool voteForSupport
    ) public payable {
        Compliant memory currentCompliant = compliants[matchId];
        if (block.number - currentCompliant.blockNum > compliantValidPeriod) {
            revert("the compliant isn't valid anymore");
        }
    }
}
