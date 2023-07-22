
  
<script setup lang="ts">
    import { defineProps, onUnmounted } from 'vue';
    import { useChatStore } from '../../stores/chatStore';
    import { useLobbyStore } from '../../stores/lobbyStore';
    import ChatInput from '@/components/ChatInput.vue';
    import LobbyInput from '@/components/LobbyInput.vue';
    import ChatMessages from '@/components/ChatMessages.vue';

    const props = defineProps({
    messages: {
        type: Array as () => string[],
        required: true
    }
    });

    const chatStore = useChatStore();
    const lobbyStore = useLobbyStore();

    const sendMessage = (message: string) => {
    chatStore.sendMessage(message);
    };

    const joinLobby = (username: string) => {
    lobbyStore.setUsername(username);
    chatStore.connectSocket();
    };

    // Disconnect socket when component is unmounted
    onUnmounted(() => {
        chatStore.disconnectSocket();
    });
</script>

<template>
    <div>
        <h2>Chat</h2>
            <div v-if="!lobbyStore.username">
                <LobbyInput @join-lobby="joinLobby" />
            </div>
        <div v-else>
            <p>Logged in as {{ lobbyStore.username }}</p>
            <ChatMessages :messages="chatStore.messages" />
            <ChatInput @send-message="sendMessage" />
        </div>
    </div>
</template>
