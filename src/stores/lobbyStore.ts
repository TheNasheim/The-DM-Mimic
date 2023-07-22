import { defineStore } from 'pinia';
import { connectSocket, disconnectSocket } from '../utils/socket';

interface LobbyState {
    username: string | null;
    lobby: string | null;
}

export const useLobbyStore = defineStore('lobby', {
    state: (): LobbyState => ({
        username: localStorage.getItem('username') || null,
        lobby: '',
    }),
    actions: {
        setUsername(username: string) {
            this.username = username;
        },
        setLobby(lobby: string) {
        this.lobby = lobby;
        },
        connectSocket() {
            const username = this.username;
            if (username) {
                connectSocket(username);
            }
        },
        disconnectSocket() {
            disconnectSocket();
        }
    }
});
