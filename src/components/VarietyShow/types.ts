export interface Participant {
  id: number;
  name: string;
  talent: string;
}

export interface StatusBarProps {
  time?: string;
}

export interface ParticipantItemProps {
  participant: Participant;
  onEdit?: () => void;
}
