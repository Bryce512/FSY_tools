'use client';
import React from 'react';
import styles from './VarietyShowManager.module.css';
import { ParticipantItem } from './ParticipantItem';
import { Participant } from './types';
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

export const ParticipantList: React.FC = () => {
  const handleEdit = (id: number) => {
    console.log(`Edit participant ${id}`);
  };

  return (
    <section className={styles.participantListContainer}>
      <div className={styles.listHeader}>
        <div className={styles.columnLabels}>
          <span className={styles.nameLabel}>Name</span>
          <span className={styles.talentLabel}>Talent</span>
        </div>
      </div>
      <div className={styles.participantList}>
        {participants.map((participant) => (
          <ParticipantItem
            key={participant.id}
            participant={participant}
            onEdit={() => handleEdit(participant.id)}
          />
        ))}
      </div>
    </section>
  );
};
