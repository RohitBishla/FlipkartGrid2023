import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flipkart from "../flipkart.png";
import { useStateContext } from "./../StateContextProvider";

function AuthPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    const r = role;
    navigate(`${r}/dashboard`);
  };
  const {
    address,
    connect,
    // allEvents,
  } = useStateContext();

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#3fb9ff" }}
    >
      <div className="card p-5">
        <div className="d-flex justify-content-center m-2">
          <img style={{ width: 50 }} src={flipkart} alt="" />
        </div>
        <h2 className="card-title text-center mb-4">Sign In via Metamask </h2>
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
        <div className="text-center mb-3">
          {!address ? (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                if (!address) {
                  connect();
                }
              }}
            >
              Connect to Metamask
            </button>
          ) : (
            <h1></h1>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="retailer">Retailer</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
