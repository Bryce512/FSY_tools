"use client";

import React from "react";
import styles from "./AddCounselor.module.css";

interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default ActionButton;
