const {ethers} = require("ethers");

//This provider will help us to read the blockchain 
// const provider = new ethers.provider.JsonRpcProvider(`https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06`) //this support in ethers version 5 but in latest version of ethers i.e 6 support jsonrpc as below.
const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06`)

//let's read some data from blockchain
const queryBlockchain = async() => {
    const blockNum = await provider.getBlockNumber();
    console.log(`Current Block Number is: ${blockNum}`);

    //Get wallet balance and convert big int(wei) into ether and wei
    const bal = await provider.getBalance("0xc4997D2E1C0d89e5cFd97228aF402Ecf80249d24")
    console.log(`Balance of address is: ${bal}`)

    //Convert big int into ether
    const balInEther = ethers.formatEther(bal);
    console.log(`Big num object convert in ether is: ${balInEther}`)

    const balInWei = ethers.parseEther(balInEther);
    console.log(`Ether convert in wei is: ${balInWei}`)
}

queryBlockchain();