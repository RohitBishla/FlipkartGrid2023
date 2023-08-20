import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flipkart from '../flipkart.png'
function RetailerSign(){
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {

    navigate("/retailer/dashboard");
  };
    return(
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor:"#3fb9ff"}}>
      <div className="card p-5">
      <div className="d-flex justify-content-center m-2">
      <img style ={{width:50}}  src={flipkart} alt="" />
      </div>
      <h2 className="card-title text-center mb-4">Retailer Login</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Log In</button>
          </div>
          </form>
      </div>
      </div>
    )
}


export default RetailerSign