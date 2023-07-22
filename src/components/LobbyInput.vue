<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import { DmButton, DmTextInput } from '../common/components';
import { useLobbyStore } from '../stores/lobbyStore';
import { TextViewModel } from '../viewModels/TextViewModel';

const emits = defineEmits(['join-lobby']);

const lobbyStore = useLobbyStore();

const username = ref("");
const lobby = '';

const join = () => {
    console.log(`test1: ${username}`)
  if (username.toString().trim() !== '' && lobby.trim() !== '') {
    lobbyStore.setUsername(username.toString().trim());
    lobbyStore.setLobby(lobby.trim());
    emits('join-lobby');
  }
};
const sendlog = () => {
    console.log(`test2: ${username.value}`)
}

const onInput = (e: { target: { value: string } }) => {
    username.value = e.target.value;
    console.log(`test2: ${username.value}`)
};
</script>

<template>
<div>
    <h3>Join the Lobby</h3>
    <!-- <form @submit.prevent="join"> -->
      <label>
        Enter your name:
      </label>
        <DmTextInput 
        name="name"
        type="text" 
        :modelValue="username" 
        @input="onInput"
        @update:modelValue="sendlog()" />
      <label>
        Enter the lobby name:
        <!-- <DmTextInput type="text" :modelValue="lobby" /> -->
      </label>
      <DmButton type="button" @clicked="join()">Join Lobby</DmButton>
    <!-- </form> -->
  </div>
</template>
  
