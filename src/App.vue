<script lang="ts" setup>
import Home from "./view/start/Home.vue";
</script>

<template>
  <RouterView />
</template>



<style lang="scss">
@function toRem($value) {
    $remValue: ($value / 16) * 1rem;
    @return $remValue;
}
@mixin small-mobile {
    @media (max-width: 320px) {
        @content;
    }
}
@mixin mobile {
    @media (max-width: 500px) {
        @content;
    }
}
@mixin device {
    @media (min-width: 500px) and (max-width: 1024px) {
        @content;
    }
}
@mixin desktop {
    @media (min-width: 1024px) {
        @content;
    }
}
</style>
