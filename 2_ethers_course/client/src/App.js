import { useEffect } from "react";
import './App.css';
import { ethers } from "ethers";
import contractAbi from './contractAbi.json'; // Import ABI from the JSON file

function App() {
  const contractAddress = "0x161F822941dD10282043058A868b647C5bdd159c";

  useEffect(() => {
    const writeContract = async () => {
      try {
        // Connect to MetaMask and request accounts
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log("Provider is:", provider);

        await provider.send("eth_requestAccounts", []); // Request MetaMask accounts(requests access to the user's Ethereum accounts, ensuring that your dApp is authorized to interact with those accounts.)

        const signer = await provider.getSigner();
        console.log("Signer is:", signer);

        // Instantiate the contract with the signer
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

        // Perform the write operation (setValue)
        const tx1 = await contractInstance.setValue(111);
        console.log('Transaction hash:', tx1.hash);

        // Wait for the transaction to be mined
        await tx1.wait();
        console.log('Transaction confirmed');


         // Perform the sendEthContract operation with a specified amount of Ether
         const tx2 = await contractInstance.sendEthContract({
          value: ethers.parseEther("0.1") // Send 0.01 Ether
        });
        console.log('sendEthContract Transaction hash:', tx2.hash);

        // Wait for the sendEthContract transaction to be mined
        await tx2.wait();
        console.log('Ether sent to contract successfully');
      } catch (error) {
        console.error("Error in writeContract:", error);
      }
    };

    writeContract();
  }, []);


  const sendEthToContract = async () => {
    try {
      // Connect to MetaMask and request accounts
      const provider = new ethers.BrowserProvider(window.ethereum);

      await provider.send("eth_requestAccounts", []); // Request MetaMask accounts

      const signer = await provider.getSigner();

      // Instantiate the contract with the signer
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

      // Perform the sendEthContract operation with a specified amount of Ether
      const tx = await contractInstance.sendEthContract({
        value: ethers.parseEther("0.1") // Send 0.01 Ether
      });
      console.log('Transaction hash:', tx.hash);

      // Wait for the transaction to be mined
      await tx.wait();
      console.log('Ether sent to contract successfully');
    } catch (error) {
      console.error("Error in sendEthToContract:", error);
    }
  };

  return (
    <div className="App">
      <h1>Smart Contract Interaction</h1>
      <button onClick={sendEthToContract}>Send 0.1 Ether to Contract</button>
    </div>
  );
}

export default App;
