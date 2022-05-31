<script setup lang="ts">
import IconReturn from "@/components/icons/IconReturn.vue";
import TopSearch from "@/components/TopSearch.vue";
import TopWatch from "@/components/TopWatch.vue";
</script>

<template>
  <div class="nav-and-search">
    <div class="icon-return">
      <IconReturn />
    </div>
    <TopSearch />
    <TopWatch />
  </div>
</template>

<style lang="scss">
.nav-and-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-return {
    display: flex;
    align-items: center;
  }
}
</style>
