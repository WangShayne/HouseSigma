<script setup lang="ts">
import IconReturn from "@/components/icons/IconReturn.vue";
import Search from "@/components/Search.vue";
import TopWatch from "@/components/TopWatch.vue";
</script>

<template>
  <header>
    <div class="nav-and-search">
      <IconReturn style="margin-right: 0.6rem" />
      <Search />
      <TopWatch />
    </div>
    <div class="search-filters">
      <button><span>All Property Types</span></button>
      <button class="showOption">
        <span class="default">3d</span><span class="actived">3d</span>
      </button>
      <button><span>Filters</span></button>
    </div>
  </header>
  <main>hello world</main>
</template>

<style lang="scss" scoped>
header {
  padding: 1rem;
  background-color: $theme-color;
  .nav-and-search {
    display: flex;
    align-items: center;
  }
  .search-filters {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    button {
      position: relative;
      padding: 0.3rem 0.6rem;
      padding-right: 1.5rem;
      background-color: transparent;
      outline: none;
      border: 1px solid #fff;
      border-radius: 2rem;

      &:not(:first-child) {
        margin-left: 0.6rem;
      }
      &::after {
        position: absolute;
        right: 0;
        top: 50%;
        content: "";
        display: block;
        width: 0px;
        height: 0px;
        border-top: 6px solid #fff;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        opacity: 0.5;
        transform: translate(-50%, -50%);
      }
      span {
        font-style: normal;
        font-weight: 600;
        font-size: 0.8rem;
        color: #fff;
      }
      &.showOption {
        span {
          position: relative;
          display: inline-block;
          padding-left: 14px;
          &::before {
            position: absolute;
            left: 6px;
            top: 50%;
            content: "";
            width: 10px;
            height: 10px;
            border: 1px solid #fff;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
          &.default {
          }
          &.actived {
            margin-left: 10px;
            &::before {
              background-color: $sub-theme-color;
            }
          }
        }
      }
    }
  }
}
</style>
