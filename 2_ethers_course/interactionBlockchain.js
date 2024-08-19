const {ethers} = require("ethers");

//This provider will help us to read the blockchain 
// const provider = new ethers.provider.JsonRpcProvider(`https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06`) //this support in ethers version 5 but in latest version of ethers i.e 6 support jsonrpc as below.
const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06`)

//let's read some data from blockchain
const queryBlockchain = async() => {
    const blockNum = await provider.getBlockNumber();
    console.log(`Current Block Number is ${blockNum}`);
}

queryBlockchain();