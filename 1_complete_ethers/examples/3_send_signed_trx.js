const {ethers} = require("ethers");

const Rpc_url = 'https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06';
const provider = new ethers.JsonRpcProvider(`${Rpc_url}`);

const acc1 = '0xc4997D2E1C0d89e5cFd97228aF402Ecf80249d24';
const acc2 = '0x955B386F9A71106f8A138aA27a30aa91544E3bEc';

const pvtkey1 = '0fdb8b68d4e081b1802cc9cb82f5bb3d19463d85e1b7afbe39a5bc1cd545bf09';
const wallet = new ethers.Wallet(pvtkey1, provider);

const main = async() => {

    //Show acc1 bal before transfer
    const senderBalBefore = await provider.getBalance(acc1);
    //Show acc2 bal before transfer
    const receiverBalBefore = await provider.getBalance(acc2);

    console.log(`\nSender balance before: ${ethers.formatEther(senderBalBefore)}`)
    console.log(`receiver balance before: ${ethers.formatEther(receiverBalBefore)}\n`)

    //Send ether from one acc to another
    const tx = await wallet.sendTransaction({
        to: acc2,
        value: ethers.parseEther("0.1")
    });

    //Wait for trx to be mined
    await tx.wait();
   // console.log("Transaction mined:",tx);

     //Show acc1 bal after transfer
    const senderBalanceAfter = await provider.getBalance(acc1)
     //Show acc2 bal after transfer
    const recieverBalanceAfter = await provider.getBalance(acc2)

    console.log(`\nSender balance after: ${ethers.formatEther(senderBalanceAfter)}`)
    console.log(`receiver balance after: ${ethers.formatEther(recieverBalanceAfter)}\n`)


}

main();