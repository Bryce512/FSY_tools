"use client";

import React, { useState } from "react";
import styles from "./AddCounselor.module.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  className?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  className = styles.inputField,
  type = "text",
}) => {
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        aria-label={label}
      />
    </div>
  );
};

export default InputField;
