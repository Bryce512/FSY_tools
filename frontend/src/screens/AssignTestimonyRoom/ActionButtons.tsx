import React from 'react';
import styles from './AssignTestimonyRooms.module.css';
// import { assignTestimonyRooms } from './AssignmentLogic';
import { useNavigate } from 'react-router-dom';

const ActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.actionButtonsContainer}>
      <button className={styles.assignButton} onClick={() => {}}>
        Assign
      </button>
      <button
        className={styles.addGroupButton}
        onClick={() => navigate('../AddTestimonyRoom')}
      >
        Add Group
      </button>
    </div>
  );
};

export default ActionButtons;
