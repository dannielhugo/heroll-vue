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
  display: grid;
  gap: 1rem;
  // grid-template-columns: repeat(auto-fit, 345px);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (min-width: 1536px) {
    max-width: 1536px;
  }

  &__cols {
    margin-bottom: 20px;
    padding: 0;
  }
}
</style>
