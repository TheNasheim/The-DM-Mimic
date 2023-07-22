export interface Message {
    id: number;
    text: string;
    username: string;
    lobby: string;
    whisperTo?: string;
}