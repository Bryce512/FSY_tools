import styles from './VarietyShowManager.module.css';

export const BottomNavigation: React.FC = () => {
  return (
    <nav className={styles.bottomNav}>
      <div className={styles.bottomNavContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64dccb7a657bb787747ff642f8f3ce92d49f510d"
          alt="Navigation item 1"
          className={styles.navIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c73df45be0e2e8fddee7c515315d0b7b800bf293"
          alt="Navigation item 2"
          className={styles.navIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/56d53d23f2e377cb51e98d76a627654b7134c4d8"
          alt="Navigation item 3"
          className={styles.navIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/784dc405ead852ddd4a72a42f24bd75da9cf791f"
          alt="Navigation item 4"
          className={styles.navIcon}
        />
      </div>
    </nav>
  );
};
