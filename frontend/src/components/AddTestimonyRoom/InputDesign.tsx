"use client";
import styles from "./InputDesign.module.css";
import StatusBar from "./StatusBar";
import NavBar from "./NavBar";
import RoomForm from "./RoomForm";
import BottomNav from "./BottomNav";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.div}>
        <StatusBar />
        <NavBar />
        <RoomForm />
        <BottomNav />
      </main>
    </>
  );
}

export default InputDesign;
