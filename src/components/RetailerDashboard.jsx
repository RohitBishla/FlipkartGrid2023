import React from "react";
import coinimg from "../coin.png";
import Navbar from "./Navbar";
import { ethers } from "ethers";
import { useStateContext } from "./../StateContextProvider";
import { useEffect, useState } from "react";

export default function RetailerDashboard() {
  const [userBalance, setUserBalance] = useState("LOADING..");
  const {
    useContractRead,
    useContractWrite,
    earnTokensViaSpend,
    address,
    contract,
    connect,
    balanceOf,
    rewardLoyalCustomer,
    // allEvents,
  } = useStateContext();
  return (
    <>
      <Navbar />
      <div className="container-fluid d-flex justify-content-center">
        <div
          class="jumbotron vh-50 mt-3 py-3 rounded-3 w-100"
          style={{ backgroundColor: "#91cdff" }}
        >
          <div>
            <img style={{ width: 80 }} src={coinimg} alt="Coin" />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setUserBalance(parseInt(balanceOf._hex) / 10 ** 8);
            }}
          >
            {/* parseInt(ethers.utils.formatEther()) */}
            Refresh your coins
          </button>

          <h1 className="display-4">Hello,You have {userBalance} Coins!</h1>
        </div>
      </div>
      <div className=" mt-3 container-fluid d-flex justify-content-around vh-100">
        <div className="w-50">
          <h2>Loyal Customers</h2>
          <div className="container-fluid ">
            <div
              class="jumbotron d-flex justify-content-around align-items-center vh-50 mt-3 py-3 rounded-3 w-100"
              style={{ backgroundColor: "#91cdff" }}
            >
              <h5>1 </h5>
              <h5>Anish</h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await rewardLoyalCustomer({
                      args: [
                        address,
                        "0x13d6ff29FF49D16010c1318CA9Cb0f3b7C787cB7",
                        100,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.error("contract call failure", err);
                  }
                }}
              >
                {" "}
                Send 100 coins
              </button>
            </div>
          </div>
          <div className="container-fluid ">
            <div
              class="jumbotron d-flex justify-content-around align-items-center vh-50 mt-3 py-3 rounded-3 w-100"
              style={{ backgroundColor: "#91cdff" }}
            >
              <h5>2 </h5>
              <h5>Rohit</h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await rewardLoyalCustomer({
                      args: [
                        address,
                        "0x885ab793c180296303b46Ca682E83062fBEb1309",
                        100,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.error("contract call failure", err);
                  }
                }}
              >
                {" "}
                Send 100 coins
              </button>
            </div>
          </div>
          <div className="container-fluid ">
            <div
              class="jumbotron d-flex justify-content-around align-items-center vh-50 mt-3 py-3 rounded-3 w-100"
              style={{ backgroundColor: "#91cdff" }}
            >
              <h5>3 </h5>
              <h5>Chandan </h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await rewardLoyalCustomer({
                      args: [
                        address,
                        "0x13d6ff29FF49D16010c1318CA9Cb0f3b7C787cB7",
                        100,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.error("contract call failure", err);
                  }
                }}
              >
                {" "}
                Send 100 coins
              </button>
            </div>
          </div>
        </div>

        <div className="w-50 border-start">
          <h2>Transaction History </h2>
          <div className="container-fluid ">
            <div
              class="jumbotron d-flex justify-content-between align-items-center vh-50 mt-3 py-3 rounded-3 w-100"
              style={{ backgroundColor: "#c0d6e4" }}
            >
              <h5 className="text-danger mx-2">-100 coins </h5>
              <h5 className="mx-2">Sent to Anish </h5>
            </div>
          </div>
          <div className="container-fluid ">
            <div
              class="jumbotron d-flex justify-content-between align-items-center vh-50 mt-3 py-3 rounded-3 w-100"
              style={{ backgroundColor: "#c0d6e4" }}
            >
              <h5 className="text-success mx-2">+100 coins </h5>
              <h5 className="mx-2">Anish purchased Camera </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
