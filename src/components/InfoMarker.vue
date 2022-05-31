<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  status: {
    type: String,
    default: "sale",
  },
});
</script>

<template>
  <div class="InfoMarker" :class="props.status">
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.InfoMarker {
  position: relative;
  padding: 4px 8px;
  background: $theme-color;
  border: 1px solid #e9ebf1;
  border-radius: 4px;
  .slot {
    font-weight: 600;
    font-size: 14px;
    color: #fff;
  }
  &::before {
    content: "";
    margin: 0px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent;
    padding: 0px;
    width: 0px;
    height: 0px;
    bottom: -20px;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0);
  }
  &::after {
    content: "";
    margin: 0px;
    border-width: 10px;
    border-style: solid;
    border-color: $theme-color transparent transparent;
    padding: 0px;
    width: 0px;
    height: 0px;
    bottom: -19px;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0);
  }
  &.sale {
    background: $theme-color;
    &::after {
      border-color: $theme-color transparent transparent;
    }
  }
  &.sold {
    background: $sub-theme-color;
    &::after {
      border-color: $sub-theme-color transparent transparent;
    }
  }
}
</style>
