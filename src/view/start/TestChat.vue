<script setup lang="ts">
import { ref, computed } from 'vue';
import { useChatStore } from '../../stores/chatStore';

    const chatStore = useChatStore();

    const message = ref('');

    const sendMessage = () => {
      const newMessage = {
        id: new Date().getTime(),
        text: message.value,
      };
      chatStore.addMessage(newMessage);
      message.value = '';
    };

    const messages = computed(() => chatStore.messages)
</script>

<template>  
    <div class="card">
        <h1>Chat App</h1>
    <div v-for="message in messages" :key="message.id">
      <p>{{ message.text }}</p>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="message" />
      <button type="submit">Send</button>
    </form>

        
      <router-link to="/"><button type="button">Home</button></router-link>
    </div>
</template>
  
<style lang="scss">
</style>
