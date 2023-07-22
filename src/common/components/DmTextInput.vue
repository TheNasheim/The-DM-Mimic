<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    isInvalid: { type: Boolean, default: false },
    autocomplete: { type: String, default: 'on' },
    leftSideIcon: { type: String, default: '' },
    max: { type: String, default: '' },
    maxLength: { type: Number, default: undefined },
    min: { type: String, default: '' },
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    size: {type: String, default: 'normal',
        validator: (val: string) =>
          ["smal", "normal", "large"].includes(val)
    },
    type: { 
        type: String, 
        required: true,
        validator: (val: string) =>
          ["number", "text", "date", "tel", "email"].includes(val), 
    },
    allowPaste: { type: Boolean, default: true },
});
const emit = defineEmits(["on:Blur", "on:FocusChange", "update:modelValue"]);

const getPlaceholderClasses = () => {
    let classes = "";
    if (
          (hasValue.value &&
            props.type != "date" &&
            props.placeholder)
        ) {
          classes += "dm-text-input__placeholder--animate ";
        }
    return classes;
}
const hasValue = computed(() => {
        return props.modelValue && props.modelValue != "";
      });


const getInputClasses = () => {
        let classes = "";
        if (props.isInvalid) {
          classes = "th-v-text-input__input--errorBorder ";
        }
        if (
          (hasValue.value &&
            props.type != "date" &&
            props.placeholder)
        ) {
          classes += "dm-text-input__input--animate ";
        }
  
        return classes;
      };

const handleInput = (event: Event) => {
    console.log(`test1: ${props.modelValue}`);
    (event.target as HTMLInputElement).value;
}

const handleOnBlur = () => {
        emit("on:Blur");
      };
</script>

<template>
    <div class="dm-text-input__container">
        <input 
            :aria-invalid="isInvalid ? 'true' : undefined"
            class="dm-text-input__input"
            :class="[ getInputClasses(), leftSideIcon ? 'dm-text-input__input--icon' : '' ]"
            :style="leftSideIcon ? `background-image: url(${leftSideIcon})` : ``"
            :type="type"
            :min="min"
            :max="max"
            :maxlength="maxLength"
            :value="modelValue"
            :placeholder="type == 'date' ? placeholder : ''"
            :autocomplete="autocomplete"
            :onpaste="allowPaste ? '' : 'return false'"
            @blur="handleOnBlur"
            @focus="$emit('focus')"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">

        <div v-if="type != 'date'"
            class="dm-text-input__placeholder"
            :class="getPlaceholderClasses()"
            data-placeholder="Placeholder" >
            <span :class="isInvalid
              ? 'dm-text-input__placeholder--validation-error-icon'
              : ''">
          {{ placeholder }}
        </span>
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
      color: #999;
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
    top: 17px;
    left: 18px;
    pointer-events: none;
    font-size: 1rem;
    color: #999;
    transition: all 0.1s linear;
    text-align: center;

    &--animate {
      font-size: 0.75rem;
      top: 0.3125rem;
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