<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';
    
    const props = defineProps({
        sendMessage: Function
    });
    
    const emits = defineEmits(['send-message']);
    
    let message = '';
</script>

<template>
    <div>
      <input v-model="message" @key.enter="sendMessage" placeholder="Type your message...">
    </div>
</template>
  
<style lang="scss">
</style>
