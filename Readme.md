# Deploy Fornaxswap V2 to Fornax Network

This is a Hardhat setup to deploy the necessary contracts of Fornaxswap.

## Get Started

Clone repo:

```
git clone https://github.com/FornaxCoin/fornaxswap-contracts
cd fornaxswap-contracts
```

Install packages:

```
npm i
```

Modify the private keys as you wish in the `hardhat.config.js` file.

### Deploy the contracts (Fornax)

To deploy the contracts in a Fornax node you can run:

```
npx hardhat run --network fornax scripts/deploy-factory.js
```

Contracts will be deployed if a Fornax node is running.

**Note: the interface will only work if the contracts are deployed in a fresh instance. As contacts addressess are saved so that they match that order of deployment**
