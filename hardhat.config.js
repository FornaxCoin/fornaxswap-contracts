/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVKEY=0x.....
const privateKey = process.env.PRIVKEY;
const privateKeyDev =
   '6343d2e0502e5133cb74c528189598264456fdd079c72cbaa78d3605defc3801';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},

      // moonbase: {
      //    url: 'https://rpc.api.moonbase.moonbeam.network',
      //    accounts: [privateKey],
      //    chainId: 1287,
      // },
      // dev: {
      //    url: 'http://127.0.0.1:9933',
      //    accounts: [privateKeyDev],
      //    network_id: '1281',
      //    chainId: 1281,
      // },
      fornax: {
         url: 'https://node.watchfornax.com/rpc',
         accounts: [privateKeyDev],
         network_id: '13936',
         chainId: 13936,
      },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.4.24',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
