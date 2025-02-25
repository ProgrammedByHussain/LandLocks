# 🌍 LandLocks: A Decentralized Solution for Secure Land Ownership

LandLocks is a blockchain-powered platform that transforms property ownership into NFTs, making land records **permanent, verifiable, and easily transferable** without reliance on centralized registries.

## 🔍 How It Works

LandLocks leverages **Internet Computer (ICP) canisters** to store property NFTs **on-chain**, allowing users to **mint, search, and transfer ownership** seamlessly. The platform features:

✅ **A React-based dashboard** for intuitive property management.  
✅ **Public NFT lookup**, enabling users to query any wallet for land holdings.  
✅ **Tamper-proof records** stored fully on the ICP blockchain.  
✅ **Fast, low-cost transactions** without traditional gas fees.

## 🚀 Why It Matters

Many regions still rely on **paper-based land titles**, leading to **disputes and fraud**. By using **blockchain technology**, LandLocks ensures **ownership is transparent, permanent, and globally accessible**.

## 💻 Tech Stack

- **Backend:** Rust (ICP Canisters)
- **Frontend:** React
- **Blockchain:** Internet Computer (ICP), Web3

## 🎥 Demo

[Watch the Demo on YouTube](#) _(https://www.youtube.com/watch?v=0Kc4P3s-sdk)_

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
