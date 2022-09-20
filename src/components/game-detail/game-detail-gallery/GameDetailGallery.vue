<template>
  <div class="game-detail-gallery">
    <el-image
      style="width: 300px; height: 200px"
      :src="src"
      :preview-src-list="srcList"
      fit="cover"
    />

    <el-carousel :interval="4000">
      <el-carousel-item v-for="item in srcList" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item" fit="cover" />
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
