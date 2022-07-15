<template>
  <el-card class="game-card" :body-style="{ padding: '0px' }" shadow="hover">
    <el-image
      v-if="game.background_image"
      :src="game.background_image"
      fit="contain"
    />
    <div style="padding: 14px">
      <div class="game-card__title">{{ game.name }}</div>
      <div class="game-card__subtitle">{{ genres }}</div>
      <div class="game-card__subtitle">{{ platforms }}</div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';

const props = defineProps<{ game: Game }>();

const platforms = props.game.platforms?.reduce((curr, game) => {
  if (curr === '') return game.platform.name;
  return `${curr}, ${game.platform.name}`;
}, '');

const genres = props.game.genres?.reduce((curr, genre) => {
  if (curr === '') return genre.name;
  return `${curr}, ${genre.name}`;
}, '');
</script>

<style scoped lang="scss">
.game-card {
  width: 100%;
  min-height: 420px;
  cursor: pointer;

  &__image {
    width: 100%;
  }

  &__title {
    font-weight: 400;
    font-size: 1.5rem;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 0.875rem;
    margin-top: 2rem;
  }
}
</style>
