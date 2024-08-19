const contractAddr = "0x337AfcC9d6Fea28DCee7CA5E667595B2f9973175"
const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "updateNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "number",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

async function callContract() {
    const provider = new ethers.provider.Web3(window.ethereum)
    const numContract = new ethers.Contract(contractAddr, contractAbi, provider.getSigner())

    //Writing the contract
    await numContract.updateNumber(54)

    //Reading the contract
    const num = await numContract.number()
    console.log(num.toString())
}