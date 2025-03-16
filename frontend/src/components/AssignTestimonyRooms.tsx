"use client";

import React from "react";
import styles from "./AssignTestimonyRooms.module.css";
import StatusBar from "./StatusBar";
import TopNavBar from "./TopNavBar";
import ActionButtons from "./ActionButtons";
import RoomTable from "./RoomTable";
import BottomNavBar from "./BottomNavBar";

const AssignTestimonyRooms: React.FC = () => {
  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <StatusBar />
      <TopNavBar />
      <main className={styles.mainContent}>
        <ActionButtons />
        <RoomTable />
      </main>
      <BottomNavBar />
    </div>
  );
};

export default AssignTestimonyRooms;
