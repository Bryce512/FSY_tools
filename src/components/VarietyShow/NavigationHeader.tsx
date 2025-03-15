"use client";
import React from "react";
import styles from "./VarietyShowManager.module.css";

export const NavigationHeader: React.FC = () => {
  return (
    <nav className={styles.navigationHeader}>
      <div className={styles.navContent}>
        <button className={styles.menuButton}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#1B1B20"/></svg>`,
            }}
          />
        </button>
        <h1 className={styles.pageTitle}>Manage Variety Show</h1>
        <button className={styles.profileButton}>
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13Z" fill="#474747"/></svg>`,
            }}
          />
        </button>
      </div>
    </nav>
  );
};
