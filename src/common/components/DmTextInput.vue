
<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';
interface DmTextInputProps {
    modelValue: string;
    placeholder?: string;
    min?: string;
    max?: string;
}
const props = defineProps<DmTextInputProps>();
const emit = defineEmits(["on:Blur", "on:FocusChange", "update:modelValue"]);
const handleInput = (event: Event) =>
    (event.target as HTMLInputElement).value;

const getPlaceholderClasses = () => {
    let classes = "";
    if(inputValue.value !== "") {
        classes = "dm-text-input__placeholder--animate"
    }
    return classes;
}

const inputValue = computed({
    get: () => props.modelValue,
    set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<template>
    <div class="dm-text-input__container">
        <input 
            class="dm-text-input__input"
            :value="inputValue"
            :min="props.min"
            :max="props.max"
            @blur="emit('on:Blur')"
            @focus="emit('on:FocusChange')"
            @input="emit('update:modelValue', handleInput($event))"
        />
        <div class="dm-text-input__placeholder"
            :class="getPlaceholderClasses()">
            <span> {{ placeholder }} </span>
        </div>
    </div>
</template>

<style lang="scss">
.dm-text-input {
  &__container {
    width: 100%;
    border-radius: .625rem;
    position: relative;
  }

  &__input {
    box-sizing: border-box;
    -moz-appearance: textfield;
    color: rgb(39,39,39);
    border-radius: .625rem;
    border: rgb(57, 57, 57) solid rgb(57, 57, 57);
    font-size: 1rem;
    padding: 17px;
    width: 100%;
    outline: none;
    background-color: rgb(255, 255, 255);

    &:hover {
        box-shadow: 0 7px 14px #0000001a;
    }

    &::placeholder {
      color: rgb(99, 99, 99);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
        box-shadow: 0 7px 14px #0000001a;
      border: rgb(57, 57, 57) solid rgb(57, 57, 57);
    }

    &--animate {
      padding-top: 23px;
      padding-bottom: 11px;
    }

    &--errorBorder {
      border-color: yellow;
      box-shadow: none;

      & ~ .dm-validation-error-presenter__error-message-wrapper {
        box-shadow: 0 7px 14px #0000001a;
      }
    }

    &--icon {
      background-repeat: no-repeat;
      background-size: 29px;
      background-position-y: center;
      padding-left: 40px;
    }

    &--validation-error-icon {
      padding-left: 43px;
    }

    &--left-side-validation-error-icon {
      padding-left: 59px;
    }
  }

  &__placeholder {
    position: absolute;
    top: 16px;
    bottom: 0;
    left: grey;
    width: 100%;
    pointer-events: none;
    font-size: 1rem;
    color: rgb(99, 99, 99);
    transition: all 0.2s linear;

    &--animate {
      font-size: 12px;
      top: 5px;
    }

    &--icon {
      left: 40px;
    }

    &--validation-error-icon {
      left: 46px;
      top: 17px;
    }

    &--left-side-icon {
      left: 43px;
    }

    &--left-side-validation-error-icon {
      left: 62px;
    }
  }

  &__validation-error-icon {
    position: absolute;
    padding-top: 17px;
    color: yellow;
    font-size: 18px;
    top: 0;
    bottom: 0;
    left: 20px;

    &--placeholder-above {
      padding-top: 24px;
    }

    &--left-side-icon {
      left: 36px;
    }
  }
}
</style>