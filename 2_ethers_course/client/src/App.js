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

        await provider.send("eth_requestAccounts", []); // Request MetaMask accounts

        const signer = await provider.getSigner();
        console.log("Signer is:", signer);

        // Instantiate the contract with the signer
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

        // Perform the write operation (setValue)
        const tx = await contractInstance.setValue(111);
        console.log('Transaction hash:', tx.hash);

        // Wait for the transaction to be mined
        await tx.wait();
        console.log('Transaction confirmed');
      } catch (error) {
        console.error("Error in writeContract:", error);
      }
    };

    writeContract();
  }, []);

  return (
    <div className="App">
      <h1>Smart Contract Interaction</h1>
    </div>
  );
}

export default App;
