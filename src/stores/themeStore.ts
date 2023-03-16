import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("themeStore", () => {
    const count = ref(0)
    const name = ref('banana')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return { count, name, doubleCount, increment }
})