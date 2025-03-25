import React from "react";
import styles from "../Global.module.css";

const BottomNavBar: React.FC = () => {
  return (
    <nav className={styles.bottomNavBar}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44d8f017248453b38c51b54c97beea2dfb2e45ae"
        alt="Door icon"
        className={styles.navIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecaf7a016085e7163b83ef5b460151dd2c82e16"
        alt="Music icon"
        className={styles.navIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74bcb06270e8e0e74d5e3bdc4f28fd661150f36a"
        alt="Theatre mask icon"
        className={styles.navIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5283107b33cb6263e01928fb34321192625179bd"
        alt="Group icon"
        className={styles.navIcon}
      />
    </nav>
  );
};

export default BottomNavBar;