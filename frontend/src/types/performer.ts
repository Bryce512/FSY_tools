export interface Performer {
    showId: number;
    firstName: string;
    lastName: string;
    actDescription: string;
    orderOfPerformance?: number | null;
    isPerforming?: boolean | null;
}
