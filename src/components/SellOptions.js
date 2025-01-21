import React, { useState } from "react";
import { Web3 } from "web3";

export const SellOptions = ({ provider, contract, refresh, setRefresh }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [duration, setDuration] = useState("");

  const handleCreateAuction = async () => {
    if (!provider) {
      alert("Please install MetaMask to interact with this feature.");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];

      const minPriceWei = web3.utils.toWei(minPrice, "ether"); // Convert ETH to Wei
      const durationInSeconds = parseInt(duration) * 86400; // Convert days to seconds

      await contract.methods
        .createAuction(name, description, minPriceWei, durationInSeconds)
        .send({ from: sender });

      alert("Auction created successfully!");
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      alert("Error creating auction.", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg items-start">
      <h2 className="text-xl font-bold mb-4">Create an Auction</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Item Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter item name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter item description"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Minimum Price (ETH)
        </label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter minimum price"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Duration (Days)
        </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter duration in days (2-9)"
        />
      </div>
      <button
        onClick={handleCreateAuction}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Create Auction
      </button>
    </div>
  );
};
