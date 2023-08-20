import React from "react";
import coinimg from "../coin.png";
import Navbar from "./Navbar";
import headphones from "../headphones.jpeg";
import purse from "../purse.jpeg";
import watch from "../watch.jpeg";
import camera from "../camera.jpg";
import { ethers } from "ethers";
import { useStateContext } from "./../StateContextProvider";
import { useEffect, useState } from "react";
// useContractEvents;

export default function CustomerDashboard() {
  const [userBalance, setUserBalance] = useState("LOADING..");
  const {
    useContractRead,
    useContractWrite,
    earnTokensViaSpend,
    address,
    contract,
    connect,
    balanceOf,
    redeemReward,
    // allEvents,
  } = useStateContext();
  // console.log(allEvents);
  // onst address = useAddress();
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
      <div className=" mt-5 container-fluid vh-100">
        <h2>Rewards</h2>
        <div className="w-70 d-flex justify-content-between">
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={camera}
                style={{ width: 260 }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body ">
              <h2 className="card-text">Camera: 10 coins </h2>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await redeemReward({
                      args: [address, 10],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.error("contract call failure", err);
                  }
                }}
              >
                {" "}
                Redeem{" "}
              </button>
            </div>
          </div>
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={purse}
                style={{ width: 300 }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h2 className="card-text">Purse: 50 coins </h2>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await redeemReward({
                      args: [address, 50],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.error("contract call failure", err);
                  }
                }}
              >
                {" "}
                Redeem{" "}
              </button>
            </div>
          </div>
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={watch}
                style={{ width: 300 }}
                className="card-img-top mt-5"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h2 className="card-text">Watch: 20 coins </h2>
              <button
                className="mt-2 btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await redeemReward({
                      args: [address, 20],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.error("contract call failure", err);
                  }
                }}
              >
                {" "}
                Redeem{" "}
              </button>
            </div>
          </div>
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={headphones}
                style={{ width: 200 }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h3 className="card-text">Headphones: 5 coins </h3>
              <button className="btn btn-warning"> Redeem </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-30 border-start mx-2">
          <h2 className="mx-2 my-4 ">Transaction History </h2>
        </div>
      </div>
    </>
  );
}
