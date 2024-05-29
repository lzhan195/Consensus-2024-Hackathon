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

    struct Match {
        address userFirst;
        address userSecond;
        uint matchId;
    }

    // Records how much stakes left for a user.
    mapping(address => uint) public balances;
    mapping(address => uint) public scores;
    mapping(bytes32 => Complaint) public complaints;
    uint public complaintValidPeriod;
    uint public initialScore;

    constructor(uint _complaintValidPeriod, uint _initialScore) {
        complaintValidPeriod = _complaintValidPeriod;
        initialScore = _initialScore;
    }

    // addBalance add funds to your account. It's also used as the entrypoint of creating a profile.
    function addBalance() public payable {
        address sender = msg.sender;
        uint curBalances = balances[sender];
        // New account, create the profile.
        if (curBalances == 0) {
            scores[sender] = initialScore;
        }
        balances[sender] = curBalances + msg.value;
    }

    function getBalance(address user) external view returns (uint) {
        return balances[user];
    }

    function getScore(address user) external view returns (uint) {
        return scores[user];
    }
}
