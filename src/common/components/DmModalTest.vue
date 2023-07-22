 
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import DmButton from "./DmButton.vue";
  
  export default defineComponent({
    name: "DmModal",
  
    components: {
        DmButton,
    },
  
    props: {
      disableClickOutside: {
        type: Boolean,
        default: false,
      },
      closeButtonText: {
        type: String,
        default: "",
      },
      headline: {
        type: String,
        default: "",
      },
      large: Boolean,
      openInNewTabOnRedButtonLinkClick: { type: Boolean, default: false },
      openInNewTabOnWhiteButtonLinkClick: { type: Boolean, default: false },
      redButtonFullWidth: { type: Boolean, default: true },
      whiteButtonFullWidth: { type: Boolean, default: true },
      redButtonHref: {
        type: String,
        default: null,
      },
      showClose: { default: true, type: Boolean },
      hideButtons: { default: false, type: Boolean },
      text: {
        type: String,
        default: "",
      },
      visible: Boolean,
      whiteButtonHref: {
        type: String,
        default: null,
        required: false,
      },
      whiteButtonText: {
        type: String,
        default: "",
      },
    },
  
    emits: ["close", "modalWhiteButtonClicked", "modalRedButtonClicked"],
  
    setup(props, { emit }) {
      const target = ref(null);
      /* onClickOutside(target, () => {
        if (props.disableClickOutside) return;
  
        emit("close");
      }); */
  
      return {
        target,
      };
    },
  });
  </script>
  
  <template>
    <div v-if="visible" class="th-v-modal">
      <div
        ref="target"
        class="th-v-modal__content"
        :class="{ 'th-v-modal__content--large': large }" >
        <button
          v-if="showClose"
          data-testid="close-button"
          class="th-v-modal__close"
          @click.prevent="$emit('close')" >
          <span class="icon-TH-Cross"></span>
        </button>
        <div class="th-v-modal__headline">
          <h3>{{ headline }}</h3>
        </div>
        <p class="th-v-modal__text" v-html="text"></p>
        <div class="th-v-modal__inner-content">
          <slot />
        </div>
        <div
          v-if="!hideButtons"
          class="th-v-modal__button-container"
          :class="{ 'th-v-modal__button-container--several-buttons': whiteButtonText }">
          <div
            v-if="whiteButtonText"
            class="th-v-modal__button"
            :class="{ 'th-v-modal__button--not-full-width': large }" >
            <th-button
              :full-width="whiteButtonFullWidth"
              color="grey"
              variant="outline"
              :href="whiteButtonHref"
              :target="openInNewTabOnWhiteButtonLinkClick ? '_blank' : '_self'"
              @clicked="$emit('modalWhiteButtonClicked')">
                {{ whiteButtonText }}
              </th-button>
          </div>
          <div
            v-if="closeButtonText"
            class="th-v-modal__button"
            :class="{
              'th-v-modal__button--not-full-width': large }" >
            <th-button
              :full-width="redButtonFullWidth"
              :href="redButtonHref"
              :target="openInNewTabOnRedButtonLinkClick ? '_blank' : '_self'"
              @clicked="
                $emit('close');
                $emit('modalRedButtonClicked'); ">
              {{ closeButtonText }}
              </th-button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <style lang="scss">
  @use "../../styles/styles";
  @use "../../styles/icon-fonts";
  
  .th-v-modal {
    display: block;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  
    &__content {
      border-radius: styles.$rounded-radius;
      @extend %shadow-box-dark;
      background-color: styles.$white;
      margin: 50% auto;
      width: calc(100vw - 40px);
      max-width: styles.px-to-rem(400);
      cursor: auto;
      padding-bottom: styles.$standard-gutter;
  
      @include styles.desktop {
        max-width: styles.px-to-rem(700);
        margin: 15% auto;
      }
  
      &--large {
        width: calc(100vw - 40px);
        margin-top: 10%;
  
        @include styles.desktop {
          max-width: 80%;
        }
      }
    }
  
    &__headline {
      & h3 {
        padding: styles.$standard-gutter 0 0 styles.$standard-gutter;
        margin: 0;
        @extend %font-apex-medium;
        color: styles.$grey-39;
        font-size: styles.$font-xxlarge-size;
        line-height: styles.px-to-rem(28);
  
        @include styles.desktop {
          font-size: styles.$font-xxxlarge-size;
          line-height: styles.px-to-rem(32);
        }
      }
    }
  
    &__inner-content {
      padding: 0 styles.$standard-gutter;
    }
  
    &__text {
      @extend %font-apex-small;
      font-size: styles.$font-medium-size;
      line-height: styles.px-to-rem(22);
      color: styles.$grey-39;
      margin-bottom: 0;
      padding: 0 styles.$standard-gutter;
    }
  
    &__button-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
      padding: styles.$small-gutter styles.$standard-gutter 0
        styles.$standard-gutter;
  
      @include styles.desktop {
        &--several-buttons {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  
    &__button {
      text-align: center;
      width: 100%;
  
      &--not-full-width {
        @include styles.desktop {
          max-width: styles.px-to-rem(280);
          margin: 0 auto;
        }
      }
    }
  
    &__close {
      width: styles.px-to-rem(32);
      height: styles.px-to-rem(32);
      border-radius: 0 styles.$rounded-radius 0 styles.$rounded-radius;
      border: 0;
      color: styles.$white;
      float: right;
      font-size: styles.px-to-rem(10);
      font-weight: bold;
      line-height: styles.px-to-rem(32);
      background-color: styles.$primary;
      display: inline-flex;
      justify-content: center;
  
      &:hover,
      &:focus {
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
  </style>
  