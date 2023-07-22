<script setup lang="ts">
import { ref } from "vue";
import { 
    DmTextInput, 
    DmButton,
    DmGridLayout,
} from "../../common/components";

const textTF = ref("");
const textTL = ref("");
const textTC = ref("");
const textTR = ref("");
const textMF = ref("");
const textML = ref("");
const textMC = ref("");
const textMR = ref("");
const textMLF = ref("");
const textBL = ref("");
const textBC = ref("");
const textBR = ref("");
const textBF = ref("");

const Buttonpress = () => {
  console.log(textTF.value);
};
</script>

<template>  
        <DmGridLayout class="TestPage">
            <template #top-content-full>
                <DmTextInput
                    v-model="textTF"
                    type="text"
                    placeholder="DmTextInput - #top-content-full"
                    @update:model-value="Buttonpress()"  />
            </template>
            <template #top-content-left>
                <DmTextInput
                    v-model="textTL"
                    type="text"
                    placeholder="DmTextInput - #top-content-left"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #top-content-column-center>
                <DmTextInput
                    v-model="textTC"
                    type="text"
                    placeholder="DmTextInput - #top-content-column-center"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #top-content-column-right>
                <DmTextInput
                    v-model="textTR"
                    type="text"
                    placeholder="DmTextInput - #top-content-right"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-full>
                <DmTextInput
                    v-model="textMF"
                    type="text"
                    placeholder="DmTextInput - #main-content-full"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-left>
                <DmTextInput
                    v-model="textML"
                    type="text"
                    placeholder="DmTextInput - #main-content-left"
                    @update:model-value="Buttonpress()" />
                <DmTextInput
                    v-model="textML"
                    type="text"
                    placeholder="DmTextInput - #main-content-left"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-center>
                <DmTextInput
                    v-model="textMC"
                    type="text"
                    placeholder="DmTextInput - #main-content-center"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #main-content-right>
                <DmTextInput
                    v-model="textMR"
                    type="text"
                    placeholder="DmTextInput - #main-content-right"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-left>
                <DmTextInput
                    v-model="textBL"
                    type="text"
                    placeholder="DmTextInput - #bottom-content-left"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-center>
                <DmTextInput
                    v-model="textBC"
                    type="text"
                    placeholder="DmTextInput - #bottom-content-center"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-right>
                <DmTextInput
                    v-model="textBR"
                    type="text"
                    placeholder="DmTextInput - #bottom-content-right"
                    @update:model-value="Buttonpress()" />
            </template>
            <template #bottom-content-full>
                <DmTextInput
                    v-model="textBF"
                    type="text"
                    placeholder="DmTextInput - #bottom-content-full"
                    @update:model-value="Buttonpress()" />
            </template>
        </DmGridLayout>
        <div class="TestPage">
            <DmButton @on:click="Buttonpress()" size="small" :full-width="true">
                DmButton Full Width needs to be fixed
            </DmButton>
            <DmButton @on:click="Buttonpress()" size="large" :full-width="true">
                <router-link to="/">Home</router-link>
            </DmButton>
        </div>
</template>
  
<style lang="scss">
.TestPage {
    text-align: center;
}
</style>
