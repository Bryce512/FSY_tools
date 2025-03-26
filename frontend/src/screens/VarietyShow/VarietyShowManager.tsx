'use client';
import React from 'react';
import styles from './VarietyShowManager.module.css';
import VarietyShowBody from './VarietyShowBody';
import BottomNavBar from '../../components/BottomNavBar';
import TopNavBar from '../../components/TopNavBar';

export const VarietyShowManager: React.FC = () => {
  return (
    <>
      <div className="mainbody">
        <TopNavBar title="Variety Show Manager" />
        <main className={styles.container} style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
          <section className={styles.content}>
            <VarietyShowBody />
          </section>
        </main>

      </div>
      <BottomNavBar />
    </>
  );
};

export default VarietyShowManager;
