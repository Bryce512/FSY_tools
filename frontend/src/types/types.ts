
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

export interface VarietyShow {
  show_id: number;
  first_name: string;
  last_name: string;
  act_description: string;
  order_or_preference: number;
  is_performing: boolean;
}