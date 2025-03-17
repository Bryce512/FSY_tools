'use client';
import React from 'react';
import styles from './VarietyShow/VarietyShowManager.module.css';
import StatusBar from './StatusBar';
import { NavigationHeader } from './VarietyShow/NavigationHeader';
import VarietyShowBody from './VarietyShow/VarietyShowBody';
import { BottomNavigation } from './VarietyShow/BottomNavigation';

export const VarietyShowManager: React.FC = () => {
  return (
    <main className={styles.container}>
      <StatusBar />
      <NavigationHeader />
      <section className={styles.content}>
        <div className={styles.actionButtons}>
          <button className={styles.addButton}>+</button>
          <button className={styles.publishButton}>Publish</button>
        </div>
        <VarietyShowBody />
      </section>
      <BottomNavigation />
    </main>
  );
};

export default VarietyShowManager;
