import React from 'react';
import styles from './AssignTestimonyRooms.module.css';
import { assignTestimonyRooms } from './AssignmentLogic';

const ActionButtons: React.FC = () => {
  return (
    <div className={styles.actionButtonsContainer}>
      <button className={styles.assignButton} onClick={assignTestimonyRooms}>
        Assign
      </button>
      <button className={styles.addGroupButton}>Add Group</button>
    </div>
  );
};

export default ActionButtons;
