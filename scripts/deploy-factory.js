const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // //Deploy WFRX
   // const wfrx = await ethers.getContractFactory('WFRX');
   // const wfrxInstance = await wfrx.deploy();
   // await wfrxInstance.deployed();
   //
   // console.log(`WFRX deployed to : ${wfrxInstance.address}`);
   //
   // //Deploy Factory
   // const factory = await ethers.getContractFactory('FornaxswapV2Factory');
   // const factoryInstance = await factory.deploy(deployerAddress);
   // await factoryInstance.deployed();
   //
   // console.log(`Factory deployed to : ${factoryInstance.address}`);

   //Deploy Router passing Factory Address and WFRX Address
   const router = await ethers.getContractFactory('FornaxswapV2Router02');
   const routerInstance = await router.deploy(
      '0x4B3Dc80342b90d0F5A515F1c23f3dB101632E92C','0x383CaD2b1a79fCaA3474699c1F81721d26C24fc9'
   );
   await routerInstance.deployed();

   console.log(`Router V02 deployed to :  ${routerInstance.address}`);

   // //Deploy Multicall (needed for Interface)
   // const multicall = await ethers.getContractFactory('Multicall');
   // const multicallInstance = await multicall.deploy();
   // await multicallInstance.deployed();
   //
   // console.log(`Multicall deployed to : ${multicallInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
