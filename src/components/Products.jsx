import React from "react";
import headphones from "../headphones.jpeg";
import purse from "../purse.jpeg";
import watch from "../watch.jpeg";
import camera from "../camera.jpg";
import Navbar from "./Navbar";
import bracelet from "../bracelet.jpg";
import shoes from "../shoes.jpg";
import tshirt from "../tshirt.jpeg";
import laptop from "../laptop.jpg";
import { useStateContext } from "./../StateContextProvider";

export default function Products() {
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
  return (
    <>
      <Navbar />
      <div
        className=" mt-3 container-fluid vh-135"
        style={{ backgroundColor: "#91cdff" }}
      >
        <h2>Products</h2>
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
              <h2 className="card-text">Camera: Rs 80,000 </h2>
              <h5>Bharatpur Electronics</h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        8000,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
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
              <h2 className="card-text">Purse: Rs. 20,000 </h2>
              <h5>Chandigarh Apparels </h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        20000,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
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
              <h2 className="card-text">Watch: Rs. 10,000 </h2>
              <h5>Chandigarh Apparels </h5>
              <button
                className="mt-2 btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        10000,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
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
              <h3 className="card-text">Headphones: Rs. 5,000 </h3>
              <h5>Bharatpur Electronics</h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        5000,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="w-70 mt-3 mb-3 d-flex justify-content-between">
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={bracelet}
                style={{ width: 300 }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body ">
              <h2 className="card-text">Bracelet: Rs 80 </h2>
              <h5>Chandigarh Apparels </h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        80,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
              </button>
            </div>
          </div>
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={shoes}
                style={{ width: 300 }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h2 className="card-text">Shoes: Rs. 2,000 </h2>
              <h5>Chandigarh Apparels </h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        2000,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
              </button>
            </div>
          </div>
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={tshirt}
                style={{ width: 150 }}
                className="card-img-top mt-5"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h2 className="card-text">Tshirt: Rs. 200 </h2>
              <h5>Chandigarh Apparels </h5>
              <button
                className="mt-2 btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        8000,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
              </button>
            </div>
          </div>
          <div class="card" style={{ width: 350 }}>
            <div>
              <img
                src={laptop}
                style={{ width: 300 }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h3 className="card-text">Laptop: Rs. 50,000 </h3>
              <h5>Bharatpur Electronics</h5>
              <button
                className="btn btn-warning"
                onClick={async () => {
                  try {
                    const { data } = await earnTokensViaSpend({
                      args: [
                        address,
                        "0x77be04328B0511366CE76f5aB654da1D401D5bB4",
                        8000,
                      ],
                    });
                    alert("contract call successs", data);
                  } catch (err) {
                    console.log("contract call failure", err);
                  }
                }}
              >
                {" "}
                Buy Now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
