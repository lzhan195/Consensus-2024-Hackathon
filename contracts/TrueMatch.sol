// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import "hardhat/console.sol";

contract TrueMatch {
    struct Complaint {
        // The person who submit the complaint.
        address submitter;
        // Supporters are the group of peole who think the complaint is valid.
        address[] supporters;
        // Doubters are the group of people who think the complaint is invalid.
        address[] doubters;
        // Record when the complaint is issued. The complaint is only valid for pre-defined number of blocks.
        uint blocknumber;
        bytes32 descHash;
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

    uint public complaintValidPeriod;
    uint public initialScore;
    // The minimum funds needed for the account the be eligible to use the app is:
    // factorA//(factorB + score[user]).
    uint public factorA;
    uint public factorB;
    // Records how much stakes left for a user.
    mapping(address => uint) public balances;
    mapping(address => uint) public scores;
    mapping(bytes32 => Complaint) public complaints;
    mapping(address => MatchReq[]) public pendingMatches;
    mapping(bytes32 => Match) public matches;

    constructor(
        uint _complaintValidPeriod,
        uint _initialScore,
        uint _factorA,
        uint _factorB
    ) {
        complaintValidPeriod = _complaintValidPeriod;
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
                console.log("get here");
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
}
