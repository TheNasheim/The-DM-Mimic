<script setup lang="ts">
interface DmGridProps {
    imageUrl?: string;
    placeholder?: string;
    min?: string;
    max?: string;
}

const imageU = false;
</script>
<template>
    <div :if="imageU" class="dm-grid-layout"  
        :style="{ backgroundImage: 'url(' + imageU + ')' }">
    <div else class="dm-grid-layout">
        <div class="dm-grid-layout__top-content">
            <div class="dm-grid-layout__top-content--full-size">
                <slot name="top-content-full" />
            </div>

            <div class="dm-grid-layout__column">
                <div class="dm-grid-layout__column--left">
                    <slot name="top-content-left" />
                </div>

                <div class="dm-grid-layout__column--center">
                    <slot name="top-content-column-center" />
                </div>

                <div class="dm-grid-layout__column--right">
                    <slot name="top-content-column-right" />
                </div>
            </div>
        </div>

        <div class="dm-grid-layout__main-content">
            <div class="dm-grid-layout__main-content--full-size">
                <slot name="main-content-full" />
            </div>

            <div class="dm-grid-layout__main-content__column">
                <div class="dm-grid-layout__main-content__column--left">
                    <slot name="main-content-left" />
                </div>

                <div class="dm-grid-layout__main-content__column--center">
                    <slot name="main-content-center" />
                </div>

                <div class="dm-grid-layout__main-content__column--right">
                    <slot name="main-content-right" />
                </div>
            </div>
        </div>

        <div class="dm-grid-layout__bottom-content">
            <div class="dm-grid-layout__column">
                <div class="dm-grid-layout__column--left">
                    <slot name="bottom-content-left" />
                </div>

                <div class="dm-grid-layout__column--center">
                    <slot name="bottom-content-center" />
                </div>

                <div class="dm-grid-layout__column--right">
                    <slot name="bottom-content-right" />
                </div>
            </div>

            <div class="dm-grid-layout__bottom-content--full-size">
                <slot name="bottom-content-full" />
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">


.dm-grid-layout {
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    background-image: url("/src/assets/dice.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-wrap: nowrap;
        &__top-content {
            padding: 0;
            &--full-size {
                width: 100%;
            }
        }

    &__column {
        display: flex;
        justify-content: space-between;
            
        &--left {
            margin: 0 auto 0 0;
            width: inherit;
        }

        &--center {
            width: inherit;
        }


        &--right {
            margin: 0 0 0 auto;
            height: inherit;
        }
    }

    &__main-content {
        padding: 0;
        height: max-content;
        &--full-size {
                width: 100%;
            }

        &__column {
            display: flex;
            justify-content: space-between;
                
            &--left {
                margin: 0 auto;
                width: inherit;
            }

            &--center {
                width: 90%;
            }


            &--right {
                margin: 0 auto;
                height: inherit;
            }
        }
    }

    &__bottom-content {
            padding: 0;
            &--full-size {
                width: 100%;
            }
        }
}
</style>