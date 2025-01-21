import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import detectEthereumProvider from "@metamask/detect-provider";
import EbayAbi from "./abis/Ebay.json";
import "./App.css";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import NotFound from "./utils/NotFound";
import { Sell } from "./pages/Sell";
import Web3 from "web3";
import { Buy } from "./pages/Buy";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    account: null,
  });

  const handleLogin = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const web3 = new Web3(provider);
        const networkId = await web3.eth.net.getId();
        const deploymentNetwork = EbayAbi.networks[networkId];

        if (!deploymentNetwork) {
          console.error("Deployment network is not correct");
          return;
        }
        const contract = new web3.eth.Contract(
          EbayAbi.abi,
          deploymentNetwork && deploymentNetwork.address
        );
        const accounts = await web3.eth.getAccounts();

        setWeb3Api({
          provider: provider,
          web3: web3,
          contract: contract,
          account: accounts[0],
        });
      } catch (error) {
        console.error("failed to connect to provider: ", error);
      }
    } else {
      alert("Please Install metamask wallet!");
    }
  };

  useEffect(() => {
    const checkChangedAccount = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        window.ethereum.on("accountChanged", (accounts) => {
          if (accounts.length > 0) {
            setWeb3Api((prevStates) => ({
              ...prevStates,
              account: accounts[0],
            }));
          } else {
            setWeb3Api((prevStates) => ({
              ...prevStates,
              account: null,
            }));
          }
        });
      }
    };

    checkChangedAccount();
    if (window.ethereum) {
      handleLogin();
    }
  }, [web3Api.provider]);
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Nav onClick={handleLogin} account={web3Api.account?.slice(0, 8)} />
        <header className="App-header flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/sell"
              element={
                <Sell
                  contract={web3Api.contract}
                  provider={web3Api.provider}
                  web3={web3Api.web3}
                />
              }
            />
            <Route
              path="/buy"
              element={
                <Buy
                  contract={web3Api.contract}
                  provider={web3Api.provider}
                  web3={web3Api.web3}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
