// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Wallet {
    string public name = "wallet";
    uint num;

    function setValue(uint _num) public {
        num = _num;
    }

    function getValue() public view returns (uint){
        return num;
    }

     //Function to send eth to this contract
    function sendEthContract() public payable {

    }

    function contractBalance() public view returns (uint) {
        return address(this).balance;
    }
}