export interface Performer {
    show_id: number;
    first_name: string;
    last_name: string;
    act_description: string;
    team_id?: number | null;
    order_of_performance?: number | null;
    is_performing?: boolean | null;
}
