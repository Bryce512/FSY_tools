"use client";
import styles from "./login/Login.module.css";

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93aa69e32f4dd1d9466774275ef6953a95e879a4bfbdceb9c009e6121aa96aa1?placeholderIfAbsent=true&apiKey=af5f86a227dc4b449a9c5e25df62c8bc"
            alt="Signal strength"
            className={styles.img}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebf9eb3d695b11f9dde1b0260a24cffb1d6e452898697c40267e8b967732bed?placeholderIfAbsent=true&apiKey=af5f86a227dc4b449a9c5e25df62c8bc"
            alt="Battery level"
            className={styles.img2}
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
