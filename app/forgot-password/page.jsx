"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1); // Step 1: enter email, Step 2: reset password

  // Step 1: Check email
  const handleCheckEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setStep(2); // move to reset password
        setMessage("User found! Enter new password.");
      } else {
        setMessage(data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    }
  };

  // Step 2: Update password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: newPassword }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Password updated successfully! You can now login.");
        setStep(1);
        setEmail("");
        setNewPassword("");
      } else {
        setMessage(data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}

      {step === 1 && (
        <form onSubmit={handleCheckEmail}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", marginBottom: "1rem", width: "100%" }}
          />
          <button type="submit">Verify Email</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{ display: "block", marginBottom: "1rem", width: "100%" }}
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
}