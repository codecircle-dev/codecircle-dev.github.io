import React from "react";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const backendUrl = import.meta.env.VITE_backend_base_url;
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/forgotpassword`,
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={forgotPasswordHandler}>
        <h3>Forgot Password</h3>
        {error && <span>{error}</span>}
        {success && <span>{success}</span>}
        <div>
          <p>
            Please enter the email address you registered your account with. We
            will send you a reset password confirmation to this email
          </p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
