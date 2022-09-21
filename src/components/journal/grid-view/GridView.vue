<template>
  <GridGameList :games="games" @detail="onDetail" />
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GridGameList from './game-list/GridGameList.vue';
defineProps<{ games: Game[] }>();

const emit = defineEmits(['detail']);

const onDetail = (game: Game) => {
  emit('detail', game);
};
</script>

<style scoped></style>
