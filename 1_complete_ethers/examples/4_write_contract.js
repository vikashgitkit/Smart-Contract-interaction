const {ethers} = require("ethers");

const Rpc_url = 'https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06';
const provider = new ethers.JsonRpcProvider(`${Rpc_url}`);

const acc1 = '0xc4997D2E1C0d89e5cFd97228aF402Ecf80249d24';
const acc2 = '0x955B386F9A71106f8A138aA27a30aa91544E3bEc';

const pvtkey1 = '0fdb8b68d4e081b1802cc9cb82f5bb3d19463d85e1b7afbe39a5bc1cd545bf09';
const wallet = new ethers.Wallet(pvtkey1, provider);
const ERC20_ABI = [
    "function balanceOf(address account) external view returns (uint256)",
    "function transfer(address recipient, uint256 amount) external returns (bool)",
]
const contractAddr = '0x779877A7B0D9E8603169DdbD7836e478b4624789'; //LINK token contract address
const contract = new ethers.Contract(contractAddr, ERC20_ABI, provider);

const main = async() => {

    const balance = await contract.balanceOf(acc1)

    console.log(`\nReading from ${contractAddr}\n`)
    console.log(`Balance of sender: ${balance}\n`)


    const contractWithWallet = contract.connect(wallet);

    const tx = await contractWithWallet.transfer(acc2, balance);
    await tx.wait();

    const balanceOfSender = await contract.balanceOf(acc1)
    const balanceOfReciever = await contract.balanceOf(acc2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)


}

main();
