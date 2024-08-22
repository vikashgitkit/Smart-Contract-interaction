const {ethers} = require("ethers");

const Rpc_url = 'https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06';
const provider = new ethers.JsonRpcProvider(`${Rpc_url}`);

const acc1 = '';
const acc2 = '';

const pvtkey1 = '';
const wallet = new ethers.Wallet(pvtkey1, provider);

const main = async() => {

    //Show acc1 bal before transfer
    const senderBalBefore = await provider.getBalance(acc1);
    //Show acc2 bal before transfer
    const receiverBalBefore = await provider.getBalance(acc2);

    //Send ether from one acc to another
    const tx = await wallet.sendTransaction({
        to: acc2,
        value: ethers.parseEther("0.1")
    });

    //Wait for trx to be mined
    await tx.wait();
    console.log("Transaction mined:",tx);

     //Show acc1 bal after transfer
    //Show acc2 bal after transfer


}