const Ebay = artifacts.require("Ebay");
// const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(Ebay);
};
