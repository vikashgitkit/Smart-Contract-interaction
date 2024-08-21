const {ethers} = require("ethers");

const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/a76eaf5b433645498bf2cce4c3b81f06`);

const contractAddress = "0x161F822941dD10282043058A868b647C5bdd159c";
const contractAbi = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractRead = async() => {


    const walletContract = new ethers.Contract(contractAddress, contractAbi, provider) //Contract instance

    //Read the name method of contract
    const contractName = await walletContract.name();
    console.log("Name of contract:", contractName);

    const num = await walletContract.getValue();
    console.log("Num is:", num);
    const numInEth = ethers.formatEther(num);
    console.log("Num in ETH is:", numInEth);

    const contractBal = await walletContract.contractBalance();
    const contBalInEth = ethers.formatEther(contractBal);
    console.log("Contract balance in ETH is:", contBalInEth);

    const usrBal = await walletContract.accountBalance("0xc4997D2E1C0d89e5cFd97228aF402Ecf80249d24");
    const usrBalInEth = ethers.formatEther(usrBal);
    console.log("User balance in ETH is:", usrBalInEth);


}
contractRead();