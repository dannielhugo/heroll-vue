<template>
  <div class="detail-info">
    <h2 class="detail-info__title">{{ title }}</h2>
    <h3 class="detail-info__value">{{ value }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; value: unknown }>();
</script>

<style lang="scss" scoped>
.detail-info {
  &__title {
    color: var(--el-color-primary);
  }
}
</style>
