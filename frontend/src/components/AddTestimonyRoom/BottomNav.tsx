import styles from "./InputDesign.module.css";

const BottomNav = () => {
  return (
    <footer className={styles.div20}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf96a3ab59d138684b682ecfc1881c1f089df6f"
        alt="Door"
        className={styles.navIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0cc721ba1f05562770034723ab5f32fbd808629"
        alt="Music"
        className={styles.navIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eadf60210e1b5709c2f8f6e92455a1582f871933"
        alt="Theatre Mask"
        className={styles.navIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5283107b33cb6263e01928fb34321192625179bd"
        alt="Group"
        className={styles.navIcon}
      />
    </footer>
  );
};

export default BottomNav;
