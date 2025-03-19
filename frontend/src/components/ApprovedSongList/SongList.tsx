import { SongItem } from "./SongItem";
import {song} from "../../../types/song";

export const SongList: React.FC = () => {
    return (
      <section className="self-center pb-32 mt-0 w-full text-base leading-7 text-black max-w-[351px]">
        <div className="flex gap-5 justify-between self-center mt-4 max-w-full text-base leading-7 text-center text-black whitespace-nowrap w-[209px]">
          <h2>Title</h2>
          <h2>Artist</h2>
        </div>
        <div className="mt-4">
          {songData.map((song, index) => (
            <SongItem
              key={`${song.title}-${index}`}
              song={song}
              alternateBackground={index % 2 === 1}
            />
          ))}
        </div>
      </section>
    );
  };
  
  const songData: song[] = [
    {
        title: "Sicko Mode", artist: "Travis Scott",
        song_id: 0,
        url: "",
        approved: true
    },
    {
        title: "Gods Plan", artist: "Drake",
        song_id: 1,
        url: "",
        approved: true
    },
 
  ];