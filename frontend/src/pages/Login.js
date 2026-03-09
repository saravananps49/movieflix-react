import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {

      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      if (res.data.success) {
        navigate("/dashboard");
      }

    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Sign In</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Sign In</button>

        </form>

      </div>

    </div>
  );
};

export default Login;