<script setup lang="ts">
import { computed, defineProps } from 'vue';
interface DmButtonProps {
    disabled?: Boolean;
    href?: string;
    shadowed?: Boolean;
    fullWidth?: Boolean,
    isLoading?: Boolean,
    color?: string,
    size?: string,
    variant?: string,
}
const props = defineProps<DmButtonProps>();
const emit = defineEmits(["on:Click", "on:FocusChange", "update:modelValue"]);

const colorIn = () => {
    if(props.color === undefined) { 
        return "primary";
    }
        return props.color;
};
const sizeIn = (value: string) => ["small", "medium", "large", "x-large"].includes(value);
const variantIn = () => {
    if(props.variant === undefined) { 
        return "solid";
    } else {
        return ["solid", "outline"].includes(props.variant);
    }
};
const buttonClasses = computed(() => ({
      [`dm-button--${colorIn()}-${variantIn()}`]: !props.disabled,
      [`dm-button--${colorIn()}-${variantIn()}-disabled`]: props.disabled,
      [`dm-button--${props.size}`]: props.size,
      "dm-button--full-width": props.fullWidth,
      "dm-button--shadow": props.shadowed,
    }));

const handleButtonClick = () => {
    if(!props.disabled) {
        emit("on:Click")
    }
};
</script>

<template>
    <a 
        class="dm-button"
        :class="buttonClasses"
        :disabled="disabled"
        :href="href"
        @click="handleButtonClick" >
        <em v-if="isLoading" class="dm-button__loading" />
        <span class="dm-button__content">
            <slot />
        </span>
    </a>
</template>

<style lang="scss">
.dm-button {
  align-items: center;
  background-color: transparent;
  border-radius: .625rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  min-width: 235px;
  max-width: 235px;
  text-decoration: none;
  transition: all 0.2s ease;
  height: 54px;
  font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
  &:visited {
    color: rgb(255,255,255);
  }

  &:hover {
    text-decoration: none;
  }


  &__content {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  &--small {
    font-size: 5px;
    height: 40px;
  }

  &--medium {
    font-size: 15px;
    height: 54px;
  }

  &--large {
    font-size: 25px;
    line-height: px-to-rem(20);
    height: 64px;
  }

  &--x-large {
    font-size: 45px;
    line-height: px-to-rem(24);
    height: px-to-rem(74);
  }

  &--full-width {
    min-width: auto;
    width: 100%;
  }

  &--rounded {
    border-radius: px-to-rem(54);
  }

  &--shadow {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18);
  }

  &--primary-solid {
    background-color: #f00;
    border: 5px;

    &:hover {
      background-color: #f00;
      color: #fff;
    }

    &-disabled {
      background-color: #f44;
      cursor: not-allowed;
    }
    &:visited {
      color: #fff;
    }
  }

  &--primary-outline {
    background-color: transparent;
    border: 1px solid #f00;
    color: #f00;
    text-shadow: none;

    &:visited {
      color: #fff;
    }

    &:hover {
      background-color: #2f2f2f;
      color: #fff;
      border-color: transparent;
    }

    &-disabled {
      border: 5px solid #f44;
      color: #f44;
      background-color: transparent;
      cursor: not-allowed;
      text-shadow: none;
    }
  }

  &--secondary-solid {
    background-color: #f00;
    border: none;

    &:hover {
      background-color: #f00;
    }

    &-disabled {
      background-color: #f44;
      cursor: not-allowed;
    }
  }

  &--secondary-outline {
    background-color: transparent;
    border: 1px solid #f00;
    color: #f00;
    text-shadow: none;

    &:visited {
      color: #f00;
    }

    &:hover {
      background-color: #f00;
      color: #fff;
    }

    &-disabled {
      background-color: transparent;
      border: 1 solid #f44;
      color: #f44;
      cursor: not-allowed;
      text-shadow: none;
    }
  }

  &--grey-solid {
    background-color: #393939;
    border: none;

    &:hover {
      background-color: #393939;
    }

    &-disabled {
      background-color: #929292;
      cursor: not-allowed;
    }
  }

  &--grey-outline {
    background-color: transparent;
    border: 1px solid #2f2f2f;
    color: #2f2f2f;
    text-shadow: none;

    &:visited {
      color: #2f2f2f;
    }

    &:hover {
      background-color: #393939;
      border-color: transparent;
      color: #fff;
    }

    &-disabled {
      background-color: transparent;
      border: 1px solid #929292;
      color: #929292;
      cursor: not-allowed;
      text-shadow: none;
    }
  }

  &--light-grey-solid {
    background-color: #999999;
    border: unset;

    &:hover {
      background-color: #999999;
    }

    &-disabled {
      background-color: #999999;
      cursor: not-allowed;
    }
  }

  &--light-grey-outline {
    background-color: transparent;
    border: 1px solid #999999;
    color: #999999;
    text-shadow: none;

    &:visited {
      color: #999999;
    }

    &:hover {
      background-color: #929292;
      border-color: transparent;
      color: #fff;
    }

    &-disabled {
      background-color: transparent;
      color: #999999;
      cursor: not-allowed;
      text-shadow: none;
      border: 1px solid #999999;
    }
  }

  &--white-solid {
    background-color: #fff;
    color: #393939;
    text-shadow: none;

    &:visited {
      color: #393939;
    }

    &:hover {
      background-color: #f2f2f2;
      color: #393939;
    }

    &-disabled {
      background-color: #fff;
      color: #393939;
      cursor: not-allowed;
      opacity: 0.8;
      text-shadow: none;
    }
  }

  &--white-outline {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    text-shadow: none;

    &:visited {
      color: #fff;
    }

    &:hover {
      background-color: #f2f2f2;
      border-color: transparent;
      color: #393939;
    }

    &-disabled {
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
      cursor: not-allowed;
      opacity: 0.5;
      text-shadow: none;
    }
  }
  &__loading {
    animation: th-spinner-spin 1s infinite;
    -webkit-animation: th-spinner-spin 1s infinite;
    font-family: "ApexNew", sans-serif;
    font-size: 25px;
  }
}
</style>