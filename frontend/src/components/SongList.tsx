<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { song } from '../types/song';

function SongList() {
  const [songs, setSongs] = useState<song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch('');
      const data = await response.json();
      setSongs(data);
    };
    fetchSongs();
  }, []);
=======
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Song {
  title: string;
  artist: string;
  spotifyUrl: string;
}

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
<<<<<<< HEAD
>>>>>>> f9227f7 (Renamed prettierrc, added SongList component)
=======
>>>>>>> d412aba (Renamed prettierrc, added SongList component)
>>>>>>> e40b6a4 (Renamed prettierrc, added SongList component)
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Artist</th>
            <th className="px-4 py-2 text-center">Link</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
<<<<<<< HEAD
              <td className="px-4 py-2">{song.songTitle}</td>
              <td className="px-4 py-2">{song.artistName}</td>
              <td className="px-4 py-2 text-center">
                <a
                  href={song.songUrl}
=======
              <td className="px-4 py-2">{song.title}</td>
              <td className="px-4 py-2">{song.artist}</td>
              <td className="px-4 py-2 text-center">
                <a
                  href={song.spotifyUrl}
<<<<<<< HEAD
>>>>>>> f9227f7 (Renamed prettierrc, added SongList component)
=======
>>>>>>> d412aba (Renamed prettierrc, added SongList component)
>>>>>>> e40b6a4 (Renamed prettierrc, added SongList component)
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
<<<<<<< HEAD
}
=======
};
<<<<<<< HEAD
>>>>>>> f9227f7 (Renamed prettierrc, added SongList component)
=======
>>>>>>> d412aba (Renamed prettierrc, added SongList component)
>>>>>>> e40b6a4 (Renamed prettierrc, added SongList component)

export default SongList;
