<script setup lang="ts">

import IconVector from '@/components/icons/IconVector.vue';
</script>

<template>
    <div class="TopWatch">
        <IconVector />
        <span>Watch</span>
    </div>

</template>

<style lang="scss" scoped>
.TopWatch{
    display: flex;
    align-items: center;
    width: 5rem;
    margin-left: 1rem;
    color: #fff;
    span {
        margin-left: 0.6rem;
    }
}
</style>
