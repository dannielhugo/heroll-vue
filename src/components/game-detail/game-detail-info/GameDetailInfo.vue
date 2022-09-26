<template>
  <div class="detail-info">
    <div class="detail-info__title">
      <span>{{ title }}</span>
      <slot name="title-complement"></slot>
    </div>
    <slot>
      <h3 class="detail-info__value">{{ value }}</h3>
    </slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; value?: unknown }>();
</script>

<style lang="scss" scoped>
.detail-info {
  &__title {
    color: var(--el-color-primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;

    span {
      margin-right: 10px;
    }
  }
}
</style>