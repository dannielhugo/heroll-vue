<template>
  <div class="game-list">
    <div class="game-list__cols" v-for="game in games" :key="game.id">
      <GridGameItem :game="game" @click="gameClick(game)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GridGameItem from '../game-item/GridGameItem.vue';
defineProps<{ games: Game[] }>();
const emit = defineEmits(['detail']);

const gameClick = (game: Game) => {
  emit('detail', game);
};
</script>

<style lang="scss" scoped>
.game-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));

  @media (max-width: 768px) {
    justify-content: center;
    grid-template-columns: 1fr;
  }

  &__cols {
    margin-bottom: 20px;
    padding: 0;
  }
}
</style>