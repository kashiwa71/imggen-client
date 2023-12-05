export interface ApiResponse {
    date: Date;
    prompt: string;
    response: string | null;
    imgsrc: string[] | null;
}