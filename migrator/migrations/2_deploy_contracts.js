const BonusToken = artifacts.require("BonusToken.sol");
const LiquidityMigrator = artifacts.require("LiquidityMigrator.sol");

module.exports = async function (deployer) {
  await deployer.deploy(BonusToken);
  const BonusToken = await BonusToken.deployed();

  const routerAddress = '';
  const pairAddress = '';
  const routerForkAddress = '';
  const pairForkAddress = '';

  await deployler.deploy(
      LiquidityMigrator,
      routerAddress,
      pairAddress,
      routerForkAddress,
      pairForkAddress,
      bonusToken.address
  );

  const LiquidityMigrator = await LiquidityMigrator.deployed();
  await bonusToken.setLiquidator(LiquidityMigrator.address);
};
