"use client";
<<<<<<< HEAD
<<<<<<< HEAD
import styles from "./MaxLogin.module.css";
import StatusBar from "./StatusBar";
import LoginForm from "./login/LoginForm";
=======
import React from "react";
=======
>>>>>>> b25d955 (updates)
import styles from "./MaxLogin.module.css";
import StatusBar from "./StatusBar";
import LoginForm from "./LoginForm";
>>>>>>> 438e655 (create front/backend dir)

function MaxLogin() {
  return (
    <main className={styles.maxLogin}>
      <StatusBar />
      <section className={styles.contentContainer}>
        <h1 className={styles.title}>FSY</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2798ac85cc899ee956706c20abb41b961ef0e9244e25dd772b854b523f5269b1?placeholderIfAbsent=true&apiKey=af5f86a227dc4b449a9c5e25df62c8bc"
          alt="FSY Logo"
          className={styles.logoImage}
        />
        <LoginForm />
      </section>
    </main>
  );
}

export default MaxLogin;
