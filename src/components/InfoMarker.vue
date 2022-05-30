<script setup lang="ts">
import { defineProps } from "vue";

interface InfoMarkerProps {
  status: string;
}

const props = withDefaults(defineProps<InfoMarkerProps>(), {
  status: "sale",
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
$sale-color: $theme-color;
$sold-color: #413e6d;

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
    background: $sale-color;
    &::after {
      border-color: $sale-color transparent transparent;
    }
  }
  &.sold {
    background: $sold-color;
    &::after {
      border-color: $sold-color transparent transparent;
    }
  }
}
</style>
