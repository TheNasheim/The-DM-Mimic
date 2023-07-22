<script setup lang="ts">
import {
  defineProps,
  onBeforeUnmount,
  onMounted,
  PropType,
  Ref,
  ref,
} from "vue";
// import { AccordionTableItem } from "../../types/AccordionTableItem";

interface AccordionTableItem {
    headline: String;
    description: String,
}

defineProps({
  items: {
    type: Array as PropType<AccordionTableItem[]>,
    default: () => {
      return [];
    },
  },
});

const descriptionElements: Record<number, HTMLDivElement> = {};
const descriptionElementOpen: Ref<Record<number, boolean>> = ref({});

const setDescriptionRef = (element: HTMLDivElement, index: number): void => {
  descriptionElements[index] = element;
};

const elementTransitionEnd = (event: Event) => {
  (event.target as HTMLDivElement).dataset.transitioning = String(false);
};

const elementOpenTransitionEnd = (event: Event) => {
  event.target?.removeEventListener("transitionend", elementOpenTransitionEnd);
  (event.target as HTMLDivElement).style.setProperty("max-height", null);
};

const toggleItem = (index: number) => {
  const descriptionElement = descriptionElements[index];

  if (descriptionElement.dataset.transitioning === String(true)) {
    return;
  }

  descriptionElement.dataset.transitioning = String(true);

  descriptionElementOpen.value[index] = !descriptionElementOpen.value[index];

  const descriptionElementHeight = descriptionElement.scrollHeight;

  if (descriptionElementOpen.value[index]) {
    descriptionElement.style.maxHeight = `${descriptionElementHeight}px`;
    descriptionElement.addEventListener(
      "transitionend",
      elementOpenTransitionEnd
    );
  } else {
    const descriptionElementTransition = descriptionElement.style.transition;
    descriptionElement.style.transition = "";

    requestAnimationFrame(() => {
      descriptionElement.style.maxHeight = `${descriptionElementHeight}px`;
      descriptionElement.style.transition = descriptionElementTransition;
      requestAnimationFrame(() => {
        descriptionElement.style.maxHeight = "0px";
      });
    });
  }
};

onMounted(() => {
  for (var index in descriptionElements) {
    descriptionElements[index].style.maxHeight = "0px";
    descriptionElements[index].addEventListener(
      "transitionend",
      elementTransitionEnd
    );
  }
});

onBeforeUnmount(() => {
  for (var index in descriptionElements) {
    descriptionElements[index].removeEventListener(
      "transitionend",
      elementTransitionEnd
    );
  }
});
</script>

<template>
  <div class="th-v-accordion-table">
    <table class="th-v-accordion-table__table">
      <caption></caption>
      <tbody>
        <tr class="th-v-accordion-table__row">
          <th></th>
        </tr>
        <tr
          v-for="(item, index) in items"
          :key="index"
          class="th-v-accordion-table__row"
        >
          <td class="th-v-accordion-table__column">
            <div
              class="th-v-accordion-table__column-text"
              @click="toggleItem(index)"
            >
              <div class="th-v-accordion-table__header">
                {{ item.headline }}
              </div>
              <div
                class="th-v-accordion-table__arrow"
                :class="{
                  'th-v-accordion-table__arrow--open':
                    descriptionElementOpen[index],
                }"
              >
                <span class="icon-TH-Arrow2" />
              </div>
            </div>
            <div
              :ref="(element) => setDescriptionRef(element as HTMLDivElement, index)"
              class="th-v-accordion-table__text-container"
            >
              <div
                class="th-v-accordion-table__text"
                v-html="item.description"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@use "../../styles/styles";
@use "../../styles/icon-fonts";

.th-v-accordion-table {
  @include styles.mobile {
    margin-top: styles.$standard-gutter;
  }

  &__arrow {
    @extend %icon-TH;
    font-size: styles.px-to-rem(10);
    padding-right: styles.px-to-rem(2);
    color: styles.$secondary;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-180deg);
    transition: transform 0.2s ease;

    &--open {
      transform: rotate(-360deg);
      transition: transform 0.2s ease;
    }
  }

  &__column {
    border: styles.$border-width solid styles.$grey-df;
    padding: unset;
    width: styles.px-to-rem(38);
    min-width: styles.px-to-rem(38);
    max-width: styles.px-to-rem(38);
    border-left-style: hidden;
    border-bottom-style: hidden;
    vertical-align: top;
    padding-top: styles.$standard-gutter;

    &:first-child {
      border-left-style: solid;
      width: 100%;
      vertical-align: middle;
      padding-top: 0;
    }
  }

  &__column-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: styles.px-to-rem(56);
    padding: styles.$small-gutter styles.$medium-gutter;
    cursor: pointer;
  }

  &__header {
    @extend %font-arial-bold;
    padding-right: styles.px-to-rem(15);
    display: flex;
    justify-content: center;
    align-items: center;
    color: styles.$grey-39;
    font-size: styles.$font-small-size;
    line-height: styles.px-to-rem(18);
  }

  &__row {
    background-color: styles.$grey-f9;

    &:nth-child(2) .th-v-accordion-table__column:nth-child(1) {
      border-top-left-radius: styles.$rounded-radius;
    }

    &:nth-child(2) .th-v-accordion-table__column:last-child {
      border-top-right-radius: styles.$rounded-radius;
    }

    &:last-child .th-v-accordion-table__column:nth-child(1) {
      border-bottom-left-radius: styles.$rounded-radius;
    }

    &:last-child .th-v-accordion-table__column:last-child {
      border-bottom-right-radius: styles.$rounded-radius;
    }

    &:nth-child(odd) {
      background-color: styles.$white;
    }

    &:last-child .th-v-accordion-table__column {
      border-bottom-style: solid;
    }
  }

  &__table {
    border-spacing: 0;
    width: 100%;

    .th-v-accordion__row:nth-child(odd) .th-v-accordion__column--selected {
      background-color: styles.$primary;
    }
  }

  &__text {
    padding: 0 styles.$medium-gutter styles.$medium-gutter;
  }

  &__text-container {
    @extend %font-arial;
    height: auto;
    color: styles.$grey-39;
    font-size: styles.$font-small-size;
    line-height: styles.px-to-rem(18);
    overflow: hidden;
    transition: max-height 0.3s ease-out;

    & b {
      @extend %font-arial-bold;
    }
  }
}
</style>
