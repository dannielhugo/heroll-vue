<template>
  <div class="game-detail-gallery" v-if="!loading">
    <el-carousel :interval="4000">
      <el-carousel-item v-for="(item, index) in srcList" :key="item">
        <el-image
          style="width: 100%; height: 100%"
          fit="cover"
          :src="item"
          :preview-src-list="srcList"
          :preview-teleported="true"
          :initial-index="index"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  <el-skeleton v-else variant="image" animated>
    <template #template>
      <el-skeleton-item
        variant="image"
        class="game-detail-gallery__skeleton__item"
      />
    </template>
  </el-skeleton>
</template>

<script setup lang="ts">
defineProps<{ srcList: string[]; src: string; loading: boolean }>();
</script>

<style scoped lang="scss">
.game-detail-gallery {
  width: 100%;
  height: 100%;

  &__skeleton {
    &__item {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
