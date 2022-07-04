<template>
  <div class="game-list">
    <div class="game-list__cols" v-for="game in games" :key="game.id">
      <GridGameItem :game="game" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GridGameItem from '../game-item/GridGameItem.vue';
defineProps<{ games: Game[] }>();
</script>

<style lang="scss" scoped>
.game-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, 345px);
  justify-content: center;

  &__cols {
    margin-bottom: 20px;
    width: 345px;
    padding: 0;
  }
}
</style>
