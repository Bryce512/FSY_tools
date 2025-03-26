'use client';
import React from 'react';
import styles from './VarietyShowManager.module.css';
import VarietyShowBody from './VarietyShowBody';
import BottomNavBar from '../../components/BottomNavBar';
import TopNavBar from '../../components/TopNavBar';

export const VarietyShowManager: React.FC = () => {
  return (
    <>
    <TopNavBar title="Variety Show Manager" />

      <div className="mainbody" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <main className={styles.container}>
          <section className={styles.content}>
            <div className={styles.actionButtons}>
              <button className={styles.addButton}>+</button>
              <button className={styles.publishButton}>Publish</button>
            </div>
            <VarietyShowBody />
          </section>
        </main>

      </div>
      <BottomNavBar />
    </>
  );
};

export default VarietyShowManager;
