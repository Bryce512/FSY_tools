export interface Song {
  title: string;
  artist: string;
  songUrl: string;
}

export interface Group {
  id: number;
  name: string;
  size: number;
  maleCounselor?: string;
  femaleCounselor?: string;
}

export interface Room {
  id: number;
  name: string;
  capacity: number;
  load: number;
  conductingMaleAC?: string;
  conductingFemaleAC?: string;
  groups: Group[];
}
