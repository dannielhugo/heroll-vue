<template>
  <div class="game-detail-gallery">
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
</template>

<script setup lang="ts">
defineProps<{ srcList: string[]; src: string }>();
</script>

<style scoped lang="scss">
.game-detail-gallery {
  width: 100%;
  height: 100%;
}
</style>