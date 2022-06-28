<template>
  <GridGameItem v-for="game in games" :key="game.id" :game="game" />
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GridGameItem from '../game-item/GridGameItem.vue';
defineProps<{ games: Game[] }>();
</script>

<style lang="scss" scoped></style>
