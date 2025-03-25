import React from 'react';
import styles from './VarietyShowManager.module.css';
import { FaEdit, FaPlus } from 'react-icons/fa';

interface Participant {
  id: number;
  name: string;
  talent: string;
}

const participants: Participant[] = [
  { id: 1, name: 'Harry Potter', talent: 'Rapping' },
  { id: 2, name: 'Ron Weasley', talent: 'Dance' },
  { id: 3, name: 'Hermione Granger', talent: 'Magic Trick' },
  { id: 4, name: 'Luna Lovegood', talent: 'Tap Dance' },
  { id: 5, name: 'Sirius Black', talent: 'Parkour' },
  { id: 6, name: 'Draco Malfoy', talent: 'Singing' },
  { id: 7, name: 'Rubeus Hagrid', talent: 'Playing Piano' },
  { id: 8, name: 'Severus Snape', talent: 'Juggling' },
  { id: 9, name: 'Neville Longbottom', talent: 'Singing' },
  { id: 10, name: 'Ginny Weasley', talent: 'Skit' },
];

const VarietyShowBody: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
        <button className={styles.publishButton}>Publish</button>
      </div>

      {/* Participant List */}
      <div className={styles.participantListContainer}>
        <div className={styles.columnLabels}>
          <span className={styles.nameLabel}>Name</span>
          <span className={styles.talentLabel}>Talent</span>
        </div>

        <div className={styles.participantList}>
          {participants.map((participant) => (
            <div key={participant.id} className={styles.participantItem}>
              <div className={styles.participantContent}>
                <div className={styles.participantInfo}>
                  <span className={styles.participantNumber}>
                    {participant.id}
                  </span>
                  <span className={styles.participantName}>
                    {participant.name}
                  </span>
                  <span className={styles.separator}>|</span>
                  <span className={styles.participantTalent}>
                    {participant.talent}
                  </span>
                </div>
                <button className={styles.editButton}>
                  <FaEdit />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VarietyShowBody;
