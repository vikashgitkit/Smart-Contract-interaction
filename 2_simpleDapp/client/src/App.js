import { useEffect } from "react";
import './App.css';
import { ethers } from "ethers";
import contractAbi from './contractAbi.json'; // Import ABI from the JSON file

function App() {
  const contractAddress = "0x161F822941dD10282043058A868b647C5bdd159c";

  useEffect(() => {
    const connectWallet = async () => {
      try {
        // Connect to MetaMask and request accounts
        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log("Provider is:", provider);

        await provider.send("eth_requestAccounts", []); // Request MetaMask accounts(requests access to the user's Ethereum accounts, ensuring that your dApp is authorized to interact with those accounts.)

        const signer = await provider.getSigner();
        console.log("Signer is:", signer);

        // Instantiate the contract with the signer
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
        console.log("Contract instance is:", contractInstance);
      } catch (error) {
        console.error("Error in connectWallet:", error);
      }
    };

    connectWallet(); // Connect to MetaMask on component mount
  }, []);

  const setValue = async () => {
    try {
      // Connect to MetaMask and get signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

      // Perform the write operation (setValue)
      const tx = await contractInstance.setValue(111);
      console.log('Transaction hash:', tx.hash);

      // Wait for the transaction to be mined
      await tx.wait();
      console.log('Transaction confirmed');
    } catch (error) {
      console.error("Error in setValue:", error);
    }
  };

  const sendEthToContract = async () => {
    try {
      // Connect to MetaMask and get signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

      // Perform the sendEthContract operation with a specified amount of Ether
      const tx = await contractInstance.sendEthContract({
        value: ethers.parseEther("0.1") // Send 0.1 Ether
      });
      console.log('sendEthContract Transaction hash:', tx.hash);

      // Wait for the sendEthContract transaction to be mined
      await tx.wait();
      console.log('Ether sent to contract successfully');
    } catch (error) {
      console.error("Error in sendEthToContract:", error);
    }
  };

  const sendEthToUser = async () => {
    try {
      // Connect to MetaMask and get signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

      // Perform the sendEthUser operation with 0.1 Ether
      const tx = await contractInstance.sendEthUser("0x955B386F9A71106f8A138aA27a30aa91544E3bEc", {
        value: ethers.parseEther("0.1") // Send 0.1 Ether
      });
      console.log('sendEthUser Transaction hash:', tx.hash);

      // Wait for the transaction to be mined
      await tx.wait();
      console.log('Ether sent to user successfully');
    } catch (error) {
      console.error("Error in sendEthToUser:", error);
    }
  };

  return (
    <div className="App">
      <h1>Smart Contract Interaction</h1>
      <button onClick={setValue}>Set Value</button>
      <button onClick={sendEthToContract}>Send 0.1 Ether to Contract</button>
      <button onClick={sendEthToUser}>Send 0.1 Ether to User</button>
    </div>
  );
}

export default App;
