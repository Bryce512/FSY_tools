import React from "react";
import styles from "./AddCounselor.module.css";

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3bff404cf81d15197d7853be1d3595ba915170d1187489fc3db66b505894125?placeholderIfAbsent=true&apiKey=3c1a9dd1d0744706893a97e73ff94c12"
            alt="Signal strength"
            className={styles.img}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8e9679a646254e0d6c027c2b8c80b09b3d1f326a55795f5bfc0d79f65689347?placeholderIfAbsent=true&apiKey=3c1a9dd1d0744706893a97e73ff94c12"
            alt="Battery level"
            className={styles.img2}
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
