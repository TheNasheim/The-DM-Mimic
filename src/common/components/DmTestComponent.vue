
<script setup lang="ts">
import { computed } from 'vue';
import { TextInputViewModel } from "../viewModel"
import { defineProps } from 'vue';
interface DmTextInputProps {
    //modelValue: TextInputViewModel;
    modelValue: String;
    test: String,
}
const props = defineProps<DmTextInputProps>();
const emit = defineEmits(["on:Blur", "on:FocusChange", "update:modelValue"]);

const handleInput = (event: Event) =>
    (event.target as HTMLInputElement).value;

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
            autocomplete="off"
            min=""
            max=""
            @blur="emit('on:Blur')"
            @focus="emit('on:FocusChange')"
            @input="emit('update:modelValue', handleInput($event))"
        />
    </div>
</template>

<style lang="scss">
.dm-text-input {
    &__container {
        margin-bottom: 0.4rem;
        position: relative;
        width: 100%;
        border-radius: .625rem;
    }
    &__input {
        border-radius: .625rem;
        padding: 0.5rem;
    }
}
</style>