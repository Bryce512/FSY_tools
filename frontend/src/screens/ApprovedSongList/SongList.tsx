import React from 'react';
import { SongItem } from './SongItem';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import BottomNavBar from '../../components/BottomNavBar';

export const SongList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNavBar title="Approved Songs" />
      <section className="flex flex-col items-center px-4 pt-4 pb-32 w-full max-w-md mx-auto">
        <button
          onClick={() => navigate('/RequestSong')}
          className="mb-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow"
        >
          Request Song
        </button>
        <header className="flex justify-between w-full border-b border-gray-300 pb-2 mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Title</h2>
          <h2 className="text-lg font-semibold text-gray-800">Artist</h2>
        </header>
        <div className="w-full flex flex-col gap-1">
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={`w-full rounded-lg p-3 ${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } shadow-sm`}
              >
                <SongItem
                  title="Sicko Mode"
                  artist="Travis Scott"
                  isAlternate={index % 2 === 1}
                />
              </div>
            ))}
        </div>
      </section>
      <BottomNavBar />
    </>
  );
};
