import React from 'react';
import styles from './VarietyShowManager.module.css';
import { ParticipantItemProps } from './types';

export const ParticipantItem: React.FC<ParticipantItemProps> = ({
  participant,
  onEdit,
}) => {
  return (
    <article className={styles.participantItem}>
      <div className={styles.participantContent}>
        <div className={styles.participantInfo}>
          <span className={styles.participantNumber}>{participant.id}</span>
          <span className={styles.participantName}>{participant.name}</span>
          <span className={styles.separator}>|</span>
          <span className={styles.participantTalent}>{participant.talent}</span>
        </div>
        <button className={styles.editButton} onClick={onEdit}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 14H3.425L13.2 4.225L11.775 2.8L2 12.575V14Z" fill="#1D1B20"/></svg>`,
            }}
          />
        </button>
      </div>
    </article>
  );
};
