import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const LoginComponent = () => {
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div className="form-group">
          <label htmlFor="username">自訂義</label>
          <input
            // onChange={}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">自訂義</label>
          <input
            // onChange={}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <button className="btn btn-primary btn-block">
            <span>自訂義</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
