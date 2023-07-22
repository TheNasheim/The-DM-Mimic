<script setup lang="ts">
import {
    DmButton,
} from "../../common/components";
</script>

<template>
  <div class="home">
    <div class="header">
      <img src="../../assets/The_DM_Mimic.png" class="logo" alt="DM Mimic logo" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="logo"
        width="18"
        height="18"
        viewBox="0 0 24 24">
        <path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z" />
      </svg>
    </div>

    <div class="home-buttons">
      <DmButton size="medium" type="button"><router-link to="/login">Login</router-link></DmButton>
      <DmButton type="button"><router-link to="/signup">Signup</router-link></DmButton>
      <DmButton type="button"><router-link to="/screen">Screen</router-link></DmButton>
      <DmButton type="button"><router-link to="/testchat">TestChat</router-link></DmButton>
      <DmButton type="button"><router-link to="/testpage">Test Page</router-link></DmButton>
    </div>
  </div>
</template>

<style lang="scss">
.home {
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/dice.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0px;
    top: 0px;
}
.header {
    width: 100%;
    margin-left: 50%;
    margin-right: 50%;
    margin-bottom: 220px;
    will-change: filter;
}
.logo {
    height: 10em;
    top: 100px;
    position: absolute;
    transform: translate(-50%, -50%);
}

img {
  z-index: 2;
}
svg {
  width: 168px;
  height: 196px;
  transform: translate(-50%, -50%) rotate(30deg);
  animation: glow 5s linear infinite alternate;
  filter: blur(10px);
  z-index: 1;
  fill: #7539e4d2;
  transition: 0.2s;
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
img:hover + svg {
  fill: rgba(244, 66, 232, 1);
}
.logo:hover {
  filter: drop-shadow(0 0 2em #424fc4de);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #2848daaa);
}
.home-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin: 5px;
  align-items: center;
}
</style>
