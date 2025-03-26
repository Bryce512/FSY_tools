import React from 'react';

interface SongItemProps {
  title: string;
  artist: string;
  isAlternate?: boolean;
}

export const SongItem: React.FC<SongItemProps> = ({
  title,
  artist,
  isAlternate = false,
}) => {
  const bgColor = isAlternate ? 'bg-sky-200' : 'bg-cyan-50';

  return (
    <div className="flex">
      <div
        className={`px-3 text-base leading-7 text-black ${bgColor} border border-black h-[30px] w-[183px]`}
      >
        {title}
      </div>
      <div
        className={`flex justify-between items-center px-4 ${bgColor} border border-black h-[30px] w-[168px]`}
      >
        <div className="text-base leading-7 text-black">{artist}</div>
        <button aria-label="External link"></button>
      </div>
    </div>
  );
};
