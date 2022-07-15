<template>
  <el-pagination
    layout="prev, pager, next, jumper"
    :total="total"
    :disabled="loading"
    :page-size="pageSize"
    @current-change="onPageChanged"
    @next-click="onPageChanged"
    @prev-click="onPageChanged"
  />
</template>

<script setup lang="ts">
const emit = defineEmits(['page-changed']);

defineProps<{
  total: number;
  loading: boolean;
  pageSize: number;
  currentPage: number;
}>();

const onPageChanged = (p: number) => {
  emit('page-changed', p);
};
</script>

<style scoped></style>
