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
          deploymentNetwork.address
        );
        const accounts = await web3.eth.getAccounts();

        setWeb3Api({
          provider: provider,
          web3: web3,
          contract: contract,
          account: accounts[0],
        });
      } catch (error) {
        console.error("Failed to connect to provider: ", error);
      }
    } else {
      alert("Please install MetaMask wallet!");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      handleLogin();
    }
  }, []);

  useEffect(() => {
    const setupAccountChangeListener = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        window.ethereum.on("accountsChanged", async (accounts) => {
          if (accounts.length > 0) {
            console.log("Account changed to:", accounts[0]);
            setWeb3Api((prevStates) => ({
              ...prevStates,
              account: accounts[0],
            }));
          } else {
            console.log("No account connected");
            setWeb3Api((prevStates) => ({
              ...prevStates,
              account: null,
            }));
          }
        });
      } else {
        console.error("MetaMask provider not found.");
      }
    };

    setupAccountChangeListener();

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", () => {});
      }
    };
  }, []);

  useEffect(() => {
    const reinitializeWeb3 = async () => {
      if (web3Api.provider && web3Api.account) {
        const web3 = new Web3(web3Api.provider);
        const networkId = await web3.eth.net.getId();
        const deploymentNetwork = EbayAbi.networks[networkId];
        if (deploymentNetwork) {
          const contract = new web3.eth.Contract(
            EbayAbi.abi,
            deploymentNetwork.address
          );
          setWeb3Api((prevStates) => ({
            ...prevStates,
            web3: web3,
            contract: contract,
          }));
        }
      }
    };

    reinitializeWeb3();
  }, [web3Api.account]);

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
