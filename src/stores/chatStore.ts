import { defineStore } from 'pinia';
import { io, Socket } from 'socket.io-client';
import { connectSocket, disconnectSocket } from '../utils/socket';

interface ChatState {
    socket: Socket | null;
    messages: string[];
}

export const useChatStore = defineStore('chat', {
    state: (): ChatState => ({
        socket: null,
        messages: []
    }),
    actions: {
        connectSocket() {
            const username = localStorage.getItem('username');
            if (username) {
                this.socket = connectSocket(username);
                this.socket.on('chat-message', (message: string) => {
                    this.messages.push(message);
                });
            }
        },
        disconnectSocket() {
            disconnectSocket();
            this.socket = null;
        },
        sendMessage(message: string) {
            if (this.socket) {
                this.socket.emit('chat-message', message);
            }
        }
    }
});
