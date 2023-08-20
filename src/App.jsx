import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useStateContext } from "./StateContextProvider";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AuthPage from "./components/Authpage";

import CustomerSign from "./components/CustomerSign";
import RetailerSign from "./components/RetailerSign";
import CustomerDashboard from "./components/CustomerDashboard";
import RetailerDashboard from "./components/RetailerDashboard";
import Products from "./components/Products";

export default function Home() {
  const [userBalance, setUserBalance] = useState("LOADING..");
  const {
    useContractRead,
    useContractWrite,
    earnTokensViaSpend,
    redeemReward,
    address,
    contract,
    connect,
    balanceOf,
  } = useStateContext();

  return (
    // <div>
    //   {!address ? (
    //     <button
    //       onClick={() => {
    //         if (!address) {
    //           connect();
    //         }
    //       }}
    //     >
    //       Button1
    //     </button>
    //   ) : (
    //     <h1>{address}</h1>
    //   )}

    //   <button
    //     onClick={async () => {
    //       try {
    //         const { data } = await earnTokensViaSpend({
    //           args: [
    //             "0x13d6ff29FF49D16010c1318CA9Cb0f3b7C787cB7",
    //             "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
    //             1000,
    //           ],
    //         });
    //         console.info("contract call successs", data);
    //       } catch (err) {
    //         console.error("contract call failure", err);
    //       }
    //     }}
    //   >
    //     Button2
    //   </button>
    //   <button
    //     onClick={() => {
    //       setUserBalance(
    //         ethers.utils.formatEther(parseInt(balanceOf._hex).toString())
    //       );
    //     }}
    //   >
    //     Button3
    //   </button>
    //   {userBalance}
    // </div>

    <div className="App">
      <Router>
        {/* {!address ? (
          <button
            onClick={() => {
              if (!address) {
                connect();
              }
            }}
          >
            Button1
          </button>
        ) : (
          <h1></h1>
        )} */}
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/customer" element={<CustomerSign />} />
          <Route path="/retailer" element={<RetailerSign />} />
          <Route path="customer/dashboard" element={<CustomerDashboard />} />
          <Route path="retailer/dashboard" element={<RetailerDashboard />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}
