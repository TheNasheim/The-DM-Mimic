import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const connectSocket = (username: string) => {
  socket = io('http://localhost:3000');
  socket.emit('join-lobby', username);
  return socket;
}

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
}