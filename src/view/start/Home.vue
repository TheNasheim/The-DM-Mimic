<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
    <div>
      <img src="../../assets/The_DM_Mimic.png" class="logo" alt="DM Mimic logo" />
      <svg xmlns="http://www.w3.org/2000/svg" class="logo" width="18" height="18" viewBox="0 0 24 24"><path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z"/></svg>
    </div>
  
    <div class="Home-Buttons">
        <router-link to="/login"><button type="button">Login</button></router-link>
        <router-link to="/signup"><button type="button">Signup</button></router-link>
        <router-link to="/screen"><button type="button">Screen</button></router-link>
    </div>
</template>
  
<style lang="scss">
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  top: 100px;
  position: absolute;
  transform: translate(-50%, -50%);
}

svg {
  width: 168px;
  height: 196px;
  transform: translate(-50%, -50%) rotate(30deg);
  animation: glow 5s linear infinite alternate;
  filter: blur(10px);
  z-index: -10;
  fill: #7539e4d2;
  transition: .2s;
}

@keyframes glow {
  from,
  to {
    filter: blur(10px);
  }
  50% {
    filter: blur(50px);
  }
}
img:hover+svg {
  fill: rgba(244, 66, 232, 1);
}
.logo:hover {
  filter: drop-shadow(0 0 2em #424fc4de);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #2848daaa);
}
.Home-Buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
}
</style>
