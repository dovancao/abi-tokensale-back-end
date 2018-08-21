const HDWalletProvider = require("truffle-hdwallet-provider");
const config = require("./config");

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        infura: {
          provider: function() {
            return new HDWalletProvider(config.account.mnemonic, config.url)
          },
          network_id: 3,
          gas: 4700000
        }
    },
};
