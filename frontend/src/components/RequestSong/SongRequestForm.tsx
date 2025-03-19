'use client';

import React, { useState } from 'react';
import styles from './InputDesign.module.css';

const SongRequestForm: React.FC = () => {
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [spotifyLink, setSpotifyLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ songTitle, artist, spotifyLink });
  };

  return (
    <section className={styles.mainContent}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffde9be94fcc429beff48c54f2c4743a2b70a263"
        alt="Music"
        className={styles.musicImage}
      />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="songTitle" className={styles.formLabel}>
            Song Title
          </label>
          <input
            id="songTitle"
            type="text"
            className={styles.formInput}
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="artist" className={styles.formLabel}>
            Artist
          </label>
          <input
            id="artist"
            type="text"
            className={styles.formInput}
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Artist"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="spotifyLink" className={styles.formLabel}>
            Spotify Link
          </label>
          <input
            id="spotifyLink"
            type="text"
            className={styles.formInput}
            value={spotifyLink}
            onChange={(e) => setSpotifyLink(e.target.value)}
            placeholder="Link"
          />
        </div>
      </form>
      <button
        type="submit"
        className={styles.requestButton}
        onClick={handleSubmit}
      >
        Request Song
      </button>
    </section>
  );
};

export default SongRequestForm;
