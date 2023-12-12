export interface ApiResponse {
    date: Date;
    prompt: string;
    response: string | null;
    imgsrc: string[] | null;
}


export interface ConversationHistory {
    id: number;
    started_at: string;
}