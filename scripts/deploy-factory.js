const { ethers } = require('hardhat');
const fs = require('fs')
// const provider = new ethers.providers.JsonRpcProvider('https://node.watchfornax.com/rpc')

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);
    const data = fs.readFileSync('./artifacts/contracts/core/FornaxswapV2Factory.sol/FornaxswapV2Factory.json',
        {encoding:'utf8'});

   // //Deploy WFRX
   // const wfrx = await ethers.getContractFactory('WFRX');
   // const wfrxInstance = await wfrx.deploy();
   // await wfrxInstance.deployed();
   //
   // console.log(`WFRX deployed to : ${wfrxInstance.address}`);
   //



   // Deploy WBTC
   // const wbtc = await ethers.getContractFactory('WBTC');
   // const wbtcInstance = await wbtc.deploy();
   // await wbtcInstance.deployed();
   //
   // console.log(`WBTC deployed to : ${wbtcInstance.address}`);
   //
   //
   //
   // //Deploy Factory
   // const factory = await ethers.getContractFactory('FornaxswapV2Factory');
   // const factoryInstance = await factory.deploy(deployerAddress);
   // await factoryInstance.deployed();
   // console.log(`Factory deployed to : ${factoryInstance.address}`);



   // // // Deploy Router passing Factory Address and WFRX Address
   // const router = await ethers.getContractFactory('FornaxswapV2Router02');
   // const routerInstance = await router.deploy(
   //    '0x0aDbB34DC59a6c6c0932f360abdDc7E9e4de95CC','0xFC621FB9920Ce8B5C7A3638c195358D1673FcE96'
   // );
   // await routerInstance.deployed();
   // console.log(`Router V02 deployed to :  ${routerInstance.address}`);


   // //Deploy Multicall (needed for Interface)
   // const multicall = await ethers.getContractFactory('Multicall');
   // const multicallInstance = await multicall.deploy();
   // await multicallInstance.deployed();
   // //
   // // console.log(`Multicall deployed to : ${multicallInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
