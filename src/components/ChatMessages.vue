<script setup lang="ts">
import { defineProps } from 'vue';
import { Message } from '../types';

const props = defineProps({
  messages: Array<Message>
});
</script>

<template>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <span>{{ message.username }}:</span> {{ message.text }}
      </li>
    </ul>
  </template>

  