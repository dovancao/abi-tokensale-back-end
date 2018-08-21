const SonCoinCrowdsale = artifacts.require('./SonCoinCrowdsale.sol');
const SonCoin = artifacts.require('./SonCoin.sol');
let date = new Date();

module.exports = function(deployer, _network, accounts) {
    const openingTime = date.getSeconds(); // two secs in the future
    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[1];

    return deployer
        .then(() => {
            return deployer.deploy(SonCoin);
        })
        .then(() => {
            return deployer.deploy(
                SonCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                SonCoin.address
            );
        });
};