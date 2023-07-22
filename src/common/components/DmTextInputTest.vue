 
  <script lang="ts">
  import { computed, defineComponent } from "vue";
  // import ThValidationErrorPresenter from "../ThValidationErrorPresenter/ThValidationErrorPresenter.vue";
  export default defineComponent({
    name: "ThTextInput",
    components: {
      // ThValidationErrorPresenter,
    },
  
    props: {
      autocomplete: {
        default: "on",
        type: String,
      },
      isInvalid: Boolean,
      leftSideIcon: {
        default: "",
        type: String,
      },
      max: {
        default: "",
        type: String,
      },
      maxLength: {
        default: undefined,
        type: Number,
      },
      min: {
        default: "",
        type: String,
      },
      modelValue: {
        default: "",
        type: String,
      },
      placeholder: {
        default: "",
        type: String,
      },
      type: {
        type: String,
        required: true,
        validator: (val: string) =>
          ["number", "text", "date", "tel", "email"].includes(val),
      },
      validationError: {
        default: "",
        type: String,
      },
      validationErrorIcon: {
        default: "",
        type: String,
      },
      validationErrorPresenterVisible: {
        default: true,
        type: Boolean,
      },
      allowPaste: {
        default: true,
        type: Boolean,
      },
    },
  
    emits: ["on:Blur", "focus", "update:modelValue"],
  
    setup(props, { emit }) {
      const hasValue = computed(() => {
        return props.modelValue && props.modelValue != "";
      });
  
      const handleOnBlur = () => {
        emit("on:Blur");
      };
  
      const handleInput = (event: Event) =>
        (event.target as HTMLInputElement).value;
  
      const getInputClasses = () => {
        let classes = "";
        if (props.isInvalid) {
          classes = "th-v-text-input__input--errorBorder ";
        }
  
        if (
          (hasValue.value &&
            props.type != "date" &&
            props.placeholder &&
            !props.validationErrorIcon) ||
          (props.validationErrorIcon && hasValue.value)
        ) {
          classes += "th-v-text-input__input--animate ";
        }
  
        if (props.validationErrorIcon && props.isInvalid) {
          classes += "th-v-text-input__input--validation-error-icon ";
        }
  
        if (props.leftSideIcon && props.validationErrorIcon && props.isInvalid) {
          classes += "th-v-text-input__input--left-side-validation-error-icon ";
        }
  
        return classes;
      };
  
      const getPlaceholderClasses = () => {
        let classes = "";
        if (hasValue.value && props.placeholder) {
          classes = "th-v-text-input__placeholder--animate ";
        }
  
        if (hasValue.value && props.leftSideIcon && !props.validationErrorIcon) {
          classes += "th-v-text-input__placeholder--icon ";
        }
  
        if (
          !hasValue.value &&
          props.placeholder &&
          props.isInvalid &&
          props.validationErrorIcon
        ) {
          classes += "th-v-text-input__placeholder--validation-error-icon ";
        }
  
        if (props.leftSideIcon) {
          classes += "th-v-text-input__placeholder--left-side-icon ";
        }
  
        if (
          props.leftSideIcon &&
          !hasValue.value &&
          props.placeholder &&
          props.isInvalid &&
          props.validationErrorIcon
        ) {
          classes +=
            "th-v-text-input__placeholder--left-side-validation-error-icon ";
        }
  
        return classes;
      };
  
      const getValidationErrorIconClasses = () => {
        let classes = props.validationErrorIcon;
  
        if (hasValue.value && props.placeholder) {
          classes +=
            " th-v-text-input__validation-error-icon--placeholder-above ";
        }
  
        if (props.leftSideIcon) {
          classes += " th-v-text-input__validation-error-icon--left-side-icon ";
        }
  
        return classes;
      };
  
      return {
        getInputClasses,
        getPlaceholderClasses,
        getValidationErrorIconClasses,
        handleOnBlur,
        handleInput,
      };
    },
  });
  </script>
  
  <template>
    <div class="th-v-text-input__container" data-testid="text-input-container">
      <input
        data-testid="text-input"
        :aria-invalid="isInvalid ? 'true' : undefined"
        class="th-v-text-input__input"
        :class="[
          getInputClasses(),
          leftSideIcon ? 'th-v-text-input__input--icon' : '',
        ]"
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
        @input="$emit('update:modelValue', handleInput($event))"
      />
  
      <div v-if="isInvalid && validationErrorIcon"
        class="th-v-text-input__validation-error-icon"></div>
  
      <div v-if="type != 'date'"
        class="th-v-text-input__placeholder"
        :class="getPlaceholderClasses()"
        data-placeholder="Placeholder">
        <span :class="validationErrorIcon && isInvalid
              ? 'th-v-text-input__placeholder--validation-error-icon'
              : ''">
          {{ placeholder }}
        </span>
      </div>
  
      <th-validation-error-presenter
        v-if="isInvalid && validationErrorPresenterVisible"
        :validation-error="validationError"
      />
    </div>
  </template>
  
  <style lang="scss">
  
  .th-v-text-input {
    &__container {
      width: 100%;
      border-radius: styles.$rounded-radius;
      position: relative;
    }
  
    &__input {
      @extend %transition;
      box-sizing: border-box;
      -moz-appearance: textfield;
      color: styles.$grey-39;
      border-radius: styles.$rounded-radius;
      border: styles.$border-width solid styles.$grey-df;
      font-size: styles.$font-medium-size;
      padding: styles.px-to-rem(17);
      width: 100%;
      outline: none;
      background-color: styles.$white;
  
      &:hover {
        @extend %shadow-box-light;
      }
  
      &::placeholder {
        color: styles.$grey-99;
      }
  
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
  
      &:focus {
        @extend %shadow-box-light;
        border: styles.$border-width solid styles.$grey-69;
      }
  
      &--animate {
        padding-top: styles.px-to-rem(23);
        padding-bottom: styles.px-to-rem(11);
      }
  
      &--errorBorder {
        border-color: styles.$error;
        box-shadow: none;
  
        & ~ .th-validation-error-presenter__error-message-wrapper {
          @extend %shadow-box-light;
        }
      }
  
      &--icon {
        background-repeat: no-repeat;
        background-size: 29px;
        background-position-y: center;
        padding-left: styles.px-to-rem(40);
      }
  
      &--validation-error-icon {
        padding-left: styles.px-to-rem(43);
      }
  
      &--left-side-validation-error-icon {
        padding-left: styles.px-to-rem(59);
      }
    }
  
    &__placeholder {
      position: absolute;
      top: styles.px-to-rem(16);
      bottom: 0;
      left: styles.$standard-gutter;
      width: 100%;
      pointer-events: none;
      font-size: styles.$font-medium-size;
      color: styles.$grey-99;
      transition: all 0.2s linear;
  
      &--animate {
        font-size: styles.px-to-rem(12);
        top: styles.px-to-rem(5);
      }
  
      &--icon {
        left: styles.px-to-rem(40);
      }
  
      &--validation-error-icon {
        left: styles.px-to-rem(46);
        top: styles.px-to-rem(17);
      }
  
      &--left-side-icon {
        left: styles.px-to-rem(43);
      }
  
      &--left-side-validation-error-icon {
        left: styles.px-to-rem(62);
      }
    }
  
    &__validation-error-icon {
      @extend %transition;
      position: absolute;
      padding-top: styles.px-to-rem(17);
      color: styles.$error;
      font-size: styles.px-to-rem(18);
      top: 0;
      bottom: 0;
      left: styles.px-to-rem(20);
  
      &--placeholder-above {
        padding-top: styles.px-to-rem(24);
      }
  
      &--left-side-icon {
        left: styles.px-to-rem(36);
      }
    }
  }
  </style>
  