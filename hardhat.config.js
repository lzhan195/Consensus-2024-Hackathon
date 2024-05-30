require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-toolbox");

var fs = require("fs");
var text = fs.readFileSync("./.privatekey").toString();
var textByLine = text.split("\n")

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: "upon age olive surge allow urban action simple pupil ten joke depth",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
    rootstock_test: {
      chainId: 31,
      url: 'https://rpc.testnet.rootstock.io/Qy3xwffMMiwJNMXvgw4UTsU7eanEwq-T',
      accounts: textByLine,
      gas: 5000000, //units of gas you are willing to pay, aka gas limit
      gasPrice: 50000000000, //gas is typically in units of gwei, but you must enter it as wei here
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}