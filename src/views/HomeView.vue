<script setup lang="ts">
import { computed, ref } from "vue";
import { useActionSheetStore } from "@/stores/actionSheet";
import NavAndSearch from "./components/NavAndSearch.vue";
import SearchFilter from "./components/SearchFilter.vue";
import ActionSheet from "@/components/ActionSheet.vue";
import VFormItem from "@/components/VForm/VFormItem.vue";

import StatusBtns from "./components/StatusBtns.vue";
import { GoogleMap, CustomMarker } from "vue3-google-map";
import IconLocation from "@/components/icons/IconLocation.vue";
import InfoMarker from "@/components/InfoMarker.vue";

import mapdata from "@/db/mapdata.json";
import config from "@/db/config.json";

const actionSheet = useActionSheetStore();

const closeActionSheet = () => {
  actionSheet.closeActionSheet();
};

const status = ref("sale");

const selectStatus = (state: string) => {
  status.value = state;
};

// 标记列表
const showList = computed(() => {
  return mapdata.filter((item) => item.status === status.value);
});

const mapRef = ref(null);

// 中心点
const center = { lat: 49.214798, lng: -122.916058 };

// 显示当前位置
const getLocation = () => {
  alert("show location");
};
</script>

<template>
  <header>
    <NavAndSearch />
    <SearchFilter />
    <ActionSheet
      title="Filter"
      :show="actionSheet.show"
      :mask-closable="true"
      @cancel="closeActionSheet"
    >
      <template #content>
        <div>
          <VFormItem>
            <template #title> Price range </template>
            <template #content> 
              

            </template>
          </VFormItem>
          <VFormItem>
            <template #title> Description Contains Keywords </template>
            <template #content> Price range content</template>
          </VFormItem>
          <VFormItem>
            <template #title> Bedrooms </template>
            <template #content> Price range content</template>
          </VFormItem>
          <VFormItem>
            <template #title> Bathroom </template>
            <template #content> Price range content</template>
          </VFormItem>
          <VFormItem>
            <template #title> Garage/Parking </template>
            <template #content> Price range content</template>
          </VFormItem>
        </div>
      </template>
    </ActionSheet>
  </header>
  <main>
    <StatusBtns @handle-click="selectStatus" />
    <GoogleMap
      class="googleMap"
      ref="mapRef"
      :api-key="config.googleMapApiKey"
      style="width: 100%; height: calc(100vh - 100px); overflow: hidden"
      :center="center"
      :zoom="14"
      disableDefaultUi
    >
      <button class="customBtn" @click="getLocation">
        <IconLocation />
      </button>
      <CustomMarker
        v-for="item in showList"
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
}
main {
  position: relative;

  .googleMap {
    :deep(.gmnoprint) {
      // display: none !important;
      z-index: -1 !important;
    }
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
