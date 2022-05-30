<script setup lang="ts">
import IconSearch from "./icons/IconSearch.vue";
import IconClose from "./icons/IconClose.vue";
</script>

<template>
  <div class="search">
    <IconSearch />
    <input type="text" value="Input Value"/>
    <IconClose />
  </div>
</template>

<style lang="scss" scoped>
.search {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  input {
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: transparent;
    outline: none;
    border: none;
  }
}
</style>
