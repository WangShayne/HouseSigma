<script setup lang="ts">
const emits = defineEmits(["handleClick"]);
const handleClick = (status: string) => {
  emits("handleClick", status);
};
</script>

<template>
  <div class="status-btns">
    <button class="sale" @click="handleClick('sale')">
      <span>For Sale</span>
    </button>
    <button class="sold" @click="handleClick('sold')">
      <span>Sold</span>
    </button>
    <button class="other" @click="handleClick('other')">
      <span>De-listed</span>
    </button>
  </div>
</template>

<style lang="scss">
.status-btns {
  position: absolute;
  display: flex;
  width: auto;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  button {
    padding: 0.5rem;
    outline: none;
    border: none;
    background-color: #fff;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &.sale {
      background-color: $theme-color;
    }
    &.sold {
      background-color: $sub-theme-color;
    }
    &.other {
      span {
        color: #808080;
      }
    }
    span {
      font-weight: 600;
      display: inline-block;
      color: #fff;
    }
  }
}
</style>
