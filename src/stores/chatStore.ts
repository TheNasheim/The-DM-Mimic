import { defineStore } from 'pinia';
import { Message } from '../types/ChatMessage';
export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [] as Message[],
  }),
  actions: {
    addMessage(message: Message) {
      this.messages.push(message);
    },
  },
});