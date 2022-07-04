<template>
  <GridGameList :games="games" />
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GridGameList from './game-list/GridGameList.vue';
defineProps<{ games: Game[] }>();
</script>

<style scoped></style>
