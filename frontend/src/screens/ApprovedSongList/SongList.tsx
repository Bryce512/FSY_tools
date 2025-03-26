import React from 'react';
import { SongItem } from './SongItem';
import TopNavBar from '../../components/TopNavBar';
import BottomNavBar from '../../components/BottomNavBar';

export const SongList: React.FC = () => {
  return (
    <>
      <TopNavBar />
      <section className="flex flex-col gap-px pb-32 mt-1 w-full max-w-[351px]">
        <header className="flex justify-between mt-4 w-[209px]">
          <h2 className="text-base leading-7 text-black">Title</h2>
          <h2 className="text-base leading-7 text-black">Artist</h2>
        </header>
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <SongItem
              key={index}
              title="Sicko Mode"
              artist="Travis Scott"
              isAlternate={index % 2 === 1}
            />
          ))}
      </section>
      <BottomNavBar />
    </>
  );
};
