export type song = {
    song_id: number;
    title: string;
    artist: string;
    url: string;
    approved: boolean;
  };

  export interface SongItemProps {
    song: song;
    alternateBackground?: boolean;
  }