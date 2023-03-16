<script setup lang="ts">
import { ref } from "vue";
import { 
    DmTextInput, 
    DmButton,
    DmGridLayout,
} from "../../common/components";

const text = ref("");

const Buttonpress = () => {
  console.log(text.value);
};
</script>

<template>  
        <DmGridLayout>
            <template #top-content-full>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #top-content-full"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #top-content-left>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #top-content-left"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #top-content-column-center>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #top-content-column-center"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #top-content-column-right>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #top-content-right"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-full>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #main-content-full"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-left>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #main-content-left"
                    @update:model-value="Buttonpress()" />
                    <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #main-content-left"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-center>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #main-content-center"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-right>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #main-content-right"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-left>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #bottom-content-left"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-center>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #bottom-content-center"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-right>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #bottom-content-right"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-full>
                <DmTextInput
                    v-model="text"
                    placeholder="DmTextInput - #bottom-content-full"
                    @update:model-value="Buttonpress()" />
            </template>
        </DmGridLayout>
        <DmButton @on:click="Buttonpress()" size="medium" :full-width="true">
                    DmButton Full Width needs to be fixed #top-content-full
                </DmButton>
        <DmButton @on:click="Buttonpress()" size="large" :full-width="true">
                    <router-link to="/">Home</router-link>
                </DmButton>
</template>
  
<style lang="scss">
</style>
