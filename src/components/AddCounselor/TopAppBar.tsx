import React from "react";
import styles from "./AddCounselor.module.css";

const TopAppBar: React.FC = () => {
  return (
    <nav className={styles.topappbar}>
      <div className={styles.topappbar2}>
        <div className={styles.leadingIcon}>
          <div className={styles.container}>
            <div className={styles.stateLayer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe712187e8ef0e90c4e5e1f52d58cf9a1dd452a62e6177cd5bd630b390bfec2e?placeholderIfAbsent=true&apiKey=3c1a9dd1d0744706893a97e73ff94c12"
                alt="Back"
                className={styles.img3}
              />
            </div>
          </div>
        </div>
        <h1 className={styles.headline}>Add Counselor</h1>
        <div className={styles.trailingIcon}>
          <div className={styles.container}>
            <div className={styles.stateLayer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/496c4f0366f07b3db26193517597c3daaca00c52620507c4da2129b3e873b187?placeholderIfAbsent=true&apiKey=3c1a9dd1d0744706893a97e73ff94c12"
                alt="Menu"
                className={styles.img4}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopAppBar;
