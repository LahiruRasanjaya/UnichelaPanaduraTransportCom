import React, { useState } from "react";

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "12345" && password === "123456") {
      setAuthenticated(true);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Admin Login</h2>
      <input
        className="form-control mb-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
