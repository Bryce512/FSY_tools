import React from "react";
import styles from "./AssignTestimonyRooms.module.css";

const ActionButtons: React.FC = () => {
  return (
    <div className={styles.actionButtonsContainer}>
      <button className={styles.assignButton}>Assign</button>
      <button className={styles.addGroupButton}>Add Group</button>
    </div>
  );
};

export default ActionButtons;
