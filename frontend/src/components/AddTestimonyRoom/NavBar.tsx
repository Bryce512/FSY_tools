import styles from "./InputDesign.module.css";

const NavBar = () => {
  return (
    <nav className={styles.div5}>
      <button className={styles.div6} aria-label="Menu">
        <i className={styles.tiTiMenu2} />
      </button>
      <h1 className={styles.div7}>Add Testimony Room</h1>
      <button className={styles.div8} aria-label="User profile">
        <i className={styles.tiTiUserCircle} />
      </button>
    </nav>
  );
};

export default NavBar;
