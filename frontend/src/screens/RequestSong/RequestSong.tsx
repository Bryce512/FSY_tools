'use client';

import React from 'react';
import styles from '../../Global.module.css';
import SongRequestForm from './SongRequestForm';
import TopNavBar from '../../components/TopNavBar';
import BottomNavBar from '../../components/BottomNavBar';

const RequestSong: React.FC = () => {
  return (
    <main className={styles.container}>
      <TopNavBar title="Request a Song" />
      <SongRequestForm />
      <BottomNavBar />
    </main>
  );
};

export default RequestSong;
