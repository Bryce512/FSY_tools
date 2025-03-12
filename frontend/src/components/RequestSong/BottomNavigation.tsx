import React from 'react';
import styles from './InputDesign.module.css';

const BottomNavigation: React.FC = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerBackground}>
        <nav className={styles.footerContent}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64dccb7a657bb787747ff642f8f3ce92d49f510d"
            alt="Door"
            className={styles.navIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c73df45be0e2e8fddee7c515315d0b7b800bf293"
            alt="Music"
            className={styles.navIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56d53d23f2e377cb51e98d76a627654b7134c4d8"
            alt="Theatre Mask"
            className={styles.navIcon}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/784dc405ead852ddd4a72a42f24bd75da9cf791f"
            alt="Group"
            className={styles.navIconNoShadow}
          />
        </nav>
      </div>
    </footer>
  );
};

export default BottomNavigation;
