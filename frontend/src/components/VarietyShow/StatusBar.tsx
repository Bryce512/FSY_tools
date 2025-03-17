import React from 'react';
import styles from './VarietyShowManager.module.css';
import { StatusBarProps } from './types';

export const StatusBar: React.FC<StatusBarProps> = ({ time = '9:41' }) => {
  return (
    <header className={styles.statusBar}>
      <div className={styles.statusBarContent}>
        <p className={styles.time}>{time}</p>
        <div className={styles.statusIcons} />
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="153" height="14" viewBox="0 0 153 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex px-[16px] pl-[6px] justify-center items-center gap-[7px] flex-[1_0_0]"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.865 2.03302C51.865 1.39997 51.3875 0.886791 50.7984 0.886791H49.7317C49.1426 0.886791 48.665 1.39997 48.665 2.03302V11.967C48.665 12.6 49.1426 13.1132 49.7317 13.1132H50.7984C51.3875 13.1132 51.865 12.6 51.865 11.967V2.03302Z" fill="black"/></svg>`,
          }}
        />
      </div>
    </header>
  );
};
