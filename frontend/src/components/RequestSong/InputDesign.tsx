'use client';

import React from 'react';
import styles from './InputDesign.module.css';
import StatusBar from './StatusBar';
import Header from './Header';
import SongRequestForm from './SongRequestForm';
import BottomNavigation from './BottomNavigation';

const InputDesign: React.FC = () => {
  return (
    <main className={styles.container}>
      <StatusBar />
      <Header />
      <SongRequestForm />
      <BottomNavigation />
    </main>
  );
};

export default InputDesign;
