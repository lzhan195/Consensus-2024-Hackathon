const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("TrueMatch", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployOneYearLockFixture() {

        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();
        const ONE_GWEI = 1_000_000_000;
        const complaint_period = 40_320;
        const factorA = 1_000_000_000;
        const factorB = 100;
        const initialScore = 100;

        const trueMatch = await ethers.getContractFactory("TrueMatch");
        const contract = await trueMatch.deploy(complaint_period, initialScore, factorA, factorB);

        return { complaint_period, initialScore, contract, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should set the right initial score", async function () {
            const { complaint_period, initialScore, contract } = await loadFixture(deployOneYearLockFixture);
            expect(await contract.initialScore()).to.equal(initialScore);
        });

        it("Should add balance to initialize account correctly", async function () {
            const { complaint_period, initialScore, contract, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);
            const ONE_GWEI = 1_000_000_000;
            await contract.connect(otherAccount).addBalance({ value: ONE_GWEI });
            let balance = await contract.getBalance(otherAccount);
            expect(balance).to.equal(ONE_GWEI);
            let score = await contract.getScore(otherAccount);
            expect(score).to.equal(100);
        });

        it("Should block non-exist user from sending match request", async function () {
            const { complaint_period, initialScore, contract, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);
            const ONE_GWEI = 1_000_000_000;
            await expect(contract.connect(otherAccount).sendMatchRequest(owner)).to.be.reverted;
        });

        it("Should allow user with fund to send match request", async function () {
            const { complaint_period, initialScore, contract, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);
            const ONE_GWEI = 1_000_000_000;
            await contract.connect(otherAccount).addBalance({ value: ONE_GWEI });
            let txOther = await contract.connect(otherAccount).sendMatchRequest(owner);
            await txOther.wait()
            await contract.connect(owner).addBalance({ value: ONE_GWEI });
            // It should return the MatchCreation event.
            const tx = contract.connect(owner).sendMatchRequest(otherAccount)
            await expect(tx).to.emit(contract, "MatchCreation");
            const onwerMatchHash = await contract.userMatches(owner, 0);
            const userMatchHash = await contract.userMatches(otherAccount, 0);
            expect(onwerMatchHash).to.be.equal(userMatchHash);
        });
    });
});
