const {ethers} = require("ethers");

const Rpc_url = 'https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06';
const provider = new ethers.JsonRpcProvider(`${Rpc_url}`);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address account) external view returns (uint256)",
]
const contractAddr = '0x7f3eA819Ac380b71C2c0c3a79F934de65623008C';

const contractInstance = new ethers.Contract(contractAddr, ERC20_ABI, provider);

const main = async() => {

    const tokenName = await contractInstance.name();
    const symbol = await contractInstance.symbol()
    const totalSupply = await contractInstance.totalSupply()

    console.log(`\nReading from ${contractAddr}\n`)
    console.log(`Name: ${tokenName}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Total Supply: ${totalSupply}\n`)

    

}

main();