"use client";

import styles from "./AddCounselor.module.css";
import StatusBar from "./StatusBar";
import TopAppBar from "./TopAppBar";
import InputField from "./InputField";
import ActionButton from "./ActionButton";

function BryceAddCounselor() {
  const handleAddCounselor = () => {
    // Implementation for adding a counselor would go here
    console.log("Adding counselor");
  };

  return (
    <section className={styles.bryceAddCounselor}>
      <StatusBar />
      <TopAppBar />

      <h2 className={styles.addaNewCounselor}>Add a New Counselor</h2>

      <InputField label="Counselor Name" placeholder="Enter Name" />

      <InputField
        label="Counselor Age"
        placeholder="Enter Age"
        className={styles.inputField2}
        type="number"
      />

      <InputField
        label="Username"
        placeholder="Enter Username"
        className={styles.inputField3}
      />

      <InputField
        label="Password"
        placeholder="Enter Password"
        className={styles.inputField4}
        type="password"
      />

      <ActionButton text="Add Counselor" onClick={handleAddCounselor} />

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/209cc9fa880f9e954497dce6faf7aa3bda4ed2050350fe7ecba0bf3e5bc6bb20?placeholderIfAbsent=true&apiKey=3c1a9dd1d0744706893a97e73ff94c12"
        alt="Decorative footer"
        className={styles.img5}
      />
    </section>
  );
}

export default BryceAddCounselor;
