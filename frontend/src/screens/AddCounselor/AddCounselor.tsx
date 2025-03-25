'use client';

import styles from './AddCounselor.module.css';
import TopNavBar from '../../components/TopNavBar';
import InputField from './InputField';
import ActionButton from './ActionButton';
import BottomNavBar from '../../components/BottomNavBar';

function BryceAddCounselor() {
  const handleAddCounselor = () => {
    // Implementation for adding a counselor would go here
    console.log('Adding counselor');
  };

  return (
    <section className={styles.bryceAddCounselor}>
      <TopNavBar title="Add New Counselor" />

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

      <BottomNavBar />
    </section>
  );
}

export default BryceAddCounselor;
