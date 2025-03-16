import React from "react";
import styles from "./AssignTestimonyRooms.module.css";

const RoomTable: React.FC = () => {
  return (
    <section className={styles.tableContainer}>
      <header className={styles.tableHeader}>
        <div className={styles.tableHeaderCell}>Male CN</div>
        <div className={styles.tableHeaderCell}>Female CN</div>
        <div className={styles.tableHeaderCell}># Youth</div>
      </header>
      <div className={styles.tableContent} />
    </section>
  );
};

export default RoomTable;
