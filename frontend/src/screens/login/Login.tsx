"use client";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <main className={styles.maxLogin}>
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

export default Login;
