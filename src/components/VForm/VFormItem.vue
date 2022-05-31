<script setup lang="ts"></script>

<template>
  <div class="VFormItem">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.VFormItem {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e2e2;
  .title {
    color: #333;
    font-size: 1.1rem;
    font-weight: 600;
  }
}
</style>
