import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Song } from "../types/types";


const SongList: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('https://api.example.com/songs'); // Replace with actual API URL
        if (!response.ok) throw new Error('Failed to fetch songs');
        const data: Song[] = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

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
              <td className="px-4 py-2">{song.title}</td>
              <td className="px-4 py-2">{song.artist}</td>
              <td className="px-4 py-2 text-center">
                <a
                  href={song.songUrl}
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
};

export default SongList;
