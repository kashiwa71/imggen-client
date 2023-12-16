export interface ApiResponse {
    created_at: Date;
    prompt: string;
    response: string | null;
    imgsrc: string[] | null;
}


export interface ConversationHistory {
    id: number;
    started_at: string;
}

export interface ConversationLog {
    id: number;
    conversation_id: number;
    prompt: string;
    role: string;
    response: string;
    created_at: string;
}