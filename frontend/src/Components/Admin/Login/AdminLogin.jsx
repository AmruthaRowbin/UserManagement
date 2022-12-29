import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./AdminLogin.css";
import { adminLogin } from "../../../REDUX/Actions/adminAction";
import { useEffect } from "react";

function AdminLogin() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const adminlogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminlogin;

  useEffect(() => {
    let admininfo = localStorage.getItem("adminInfo")
    if(admininfo){
     navigate("/admin")   
    }
  },[adminInfo]);
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(email, password));
  };
  return (
    <div>
      <>
        <div className="baground ">
          <div className="logo">
            <img
              className="logoimg "
              src="./39d04bd0d9930eda73f40b06c74e78f0-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="form">
            <div className="formcontainer">
              <form action="">
                <p className="login">Admin Login</p>

                {error ? (
                  <Alert variant="danger">
                    <strong style={{ color: "red" }}>{error} </strong>
                  </Alert>
                ) : (
                  ""
                )}

                {loading ? <h2>{error}</h2> : ""}
                
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="input1"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                />
                <br />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password..."
                />
                <p className="fp">Forgot Passowrd ...?</p>
                <div className="buttons">
                  <button onClick={handlesubmit} className="button1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AdminLogin;
