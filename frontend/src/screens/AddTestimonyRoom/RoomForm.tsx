'use client';
import React from 'react';
import styles from './TestimonyRooms.module.css';
import FormInput from './FormInput';

const RoomForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className={styles.div9}>
      <h2 className={styles.div10}>New Testimony Room</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Room Number"
          placeholder="ex: A101"
          containerClassName={styles.div11}
        />
        <FormInput
          label="Building"
          placeholder="ex: TNRB"
          containerClassName={styles.div14}
        />
        <FormInput
          label="Capacity"
          placeholder="ex: 25"
          containerClassName={styles.div17}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={() => window.location.reload()}
        >
          Add Room
        </button>
      </form>
    </section>
  );
};

export default RoomForm;
