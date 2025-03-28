"use client";
import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/AssignRooms");
    console.log("Login attempt with:", { username, password });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.usernameField}>
        <input
          type="text"
          placeholder="Username"
          className={styles.usernameInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
      </div>
      <div className={styles.passwordField}>
        <input
          type="password"
          placeholder="Password"
          className={styles.passwordInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
      </div>
      <div className={styles.loginButtonContainer}>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
