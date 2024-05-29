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
        const initialScore = 100;

        const trueMatch = await ethers.getContractFactory("TrueMatch");
        const contract = await trueMatch.deploy(complaint_period, initialScore);

        return { complaint_period, initialScore, contract, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should set the right initial score", async function () {
            const { complaint_period, initialScore, contract } = await loadFixture(deployOneYearLockFixture);
            expect(await contract.initialScore()).to.equal(initialScore);
        });

        it("Should add balance correctly", async function () {
            const { complaint_period, initialScore, contract, owner, otherAccount } = await loadFixture(deployOneYearLockFixture);
            const ONE_GWEI = 1_000_000_000;
            await contract.connect(otherAccount).addBalance({ value: ONE_GWEI });
            let balance = await contract.getBalance(otherAccount);
            expect(balance).to.equal(ONE_GWEI);
        });
    });
});
