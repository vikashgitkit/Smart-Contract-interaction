const {ethers} = require("ethers");

const Rpc_url = 'https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06';
const provider = new ethers.JsonRpcProvider(`${Rpc_url}`);

const acc1 = '0xc4997D2E1C0d89e5cFd97228aF402Ecf80249d24';
const acc2 = '0x955B386F9A71106f8A138aA27a30aa91544E3bEc';

const pvtkey1 = '0fdb8b68d4e081b1802cc9cb82f5bb3d19463d85e1b7afbe39a5bc1cd545bf09';
const wallet = new ethers.Wallet(pvtkey1, provider);
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

//Dai token contract address
const contractAddr = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const contract = new ethers.Contract(contractAddr, ERC20_ABI, provider);

const main = async() => {
    const block = await provider.getBlockNumber();
    console.log("Current block is:", block)

    const transferEvents = await contract.queryFilter('Transfer', block - 10, block);
    console.log("Transfer Event is:", transferEvents)

}

main();