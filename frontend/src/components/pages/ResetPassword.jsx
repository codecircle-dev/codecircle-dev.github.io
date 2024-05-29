import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { resetToken } = useParams();
  const backendUrl = import.meta.env.VITE_backend_base_url;
  const resetPasswordHandler = async (e) => {

    e.preventDefault();
    console.log("Reset Token:", resetToken); 
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const response = await axios.put(
        `${backendUrl}/api/auth/resetpassword/${resetToken}`,
        { password },
        config
      );


      if (response.data && response.data.data) {
        console.log("Success Data:", response.data.data);
        setSuccess(response.data.data);
      } else {
        console.error("Invalid response format:", response); 
        setError("Invalid response format");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      setError(error.message || "An error occurred while resetting password");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={resetPasswordHandler}>
        <h3>Reset Password</h3>
        {error && <span>{error}</span>}
        {success && (
          <span>
            {success} <Link to="/login">Login</Link>
          </span>
        )}
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmPassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
