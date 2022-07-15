<template>
  <el-alert v-if="show" :title="message" :type="type" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMessageStore } from '@/stores/message';

const messageStore = useMessageStore();
const { show, message, type } = storeToRefs(messageStore);
</script>

<style scoped></style>
