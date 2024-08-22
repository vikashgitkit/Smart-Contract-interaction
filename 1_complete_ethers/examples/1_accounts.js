const {ethers} = require("ethers");

const Rpc_url = 'https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06';
const provider = new ethers.JsonRpcProvider(`${Rpc_url}`);

const address = '0xc4997D2E1C0d89e5cFd97228aF402Ecf80249d24';

const main = async() => {
    const bal = await provider.getBalance(address);
    console.log(`\nETH balance of ${address} --> ${ethers.formatEther(bal)} ETH\n`)
}

main();