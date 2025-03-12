"use client";
import React from "react";
import styles from "./InputDesign.module.css";

interface FormInputProps {
  label: string;
  placeholder: string;
  containerClassName?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  containerClassName,
}) => {
  return (
    <div className={containerClassName}>
      <label className={styles.div12}>{label}</label>
      <div className={styles.div13}>
        <input type="text" placeholder={placeholder} className={styles.input} />
      </div>
    </div>
  );
};

export default FormInput;
