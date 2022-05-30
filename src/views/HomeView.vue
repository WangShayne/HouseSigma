<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import IconReturn from "@/components/icons/IconReturn.vue";
import Search from "@/components/Search.vue";
import TopWatch from "@/components/TopWatch.vue";
import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";
import IconLocation from "@/components/icons/IconLocation.vue";
import InfoMarker from "@/components/InfoMarker.vue";

import mapdata from "@/db/mapdata.json";
console.log(mapdata);
const mapRef = ref(null);

// 中心点
const center = { lat: 49.214798, lng: -122.916058 };

// 显示当前位置
const getLocation = () => {
  alert("show location");
};

//
const saleList = computed(() => {
  return mapdata.filter((item) => item.status === "sale");
});

const soldList = computed(() => {
  return mapdata.filter((item) => item.status === "sold");
});
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
  <main>
    <div class="status-btns">
      <button class="sale"><span>For Sale</span></button>
      <button class="sold">
        <span>Sold</span>
      </button>
      <button class="other"><span>De-listed</span></button>
    </div>
    <GoogleMap
      class="googleMap"
      ref="mapRef"
      api-key="AIzaSyA1Krb9T9-F1KMysusQqc3b_Hk6YRL-0YU"
      style="width: 100%; height: calc(100vh - 100px)"
      :center="center"
      :zoom="14"
      disableDefaultUi
    >
      <button class="customBtn" @click="getLocation">
        <IconLocation />
      </button>
      <CustomMarker
        v-for="item in saleList"
        :key="item.id"
        :options="{
          position: { lat: item.location?.lat, lng: item.location?.lon },
          anchorPoint: 'BOTTOM_CENTER',
        }"
      >
        <InfoMarker :status="item.status">
          <span>{{ item.label }}</span>
        </InfoMarker>
      </CustomMarker>
    </GoogleMap>
  </main>
</template>

<style lang="scss" scoped>
header {
  padding: 0.5rem 1rem;
  height: 100px;
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
main {
  position: relative;
  .status-btns {
    position: absolute;
    width: auto;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
    button {
      padding: 1rem;
      span {
        color: #fff;
      }
    }
  }
  .googleMap {
    .customBtn {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 47px;
      width: 47px;
      border-radius: 50%;
      border: 0px;
      margin: 10px;
      padding: 0px;
      font-size: 1.25rem;
      text-transform: none;
      appearance: none;
      background: white;
      cursor: pointer;
      user-select: none;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
      overflow: hidden;
      z-index: 3;
    }
  }
}
</style>
