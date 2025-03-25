'use client';
import styles from './TestimonyRooms.module.css';
import RoomForm from './RoomForm';
import BottomNav from '../../components/BottomNavBar';
import TopNavBar from '../../components/TopNavBar';

function TestimonyRooms() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.div}>
        <TopNavBar title="Testimony Rooms" />
        <RoomForm />
        <BottomNav />
      </main>
    </>
  );
}

export default TestimonyRooms;
