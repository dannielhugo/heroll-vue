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
import { useGameGenrePlatform } from '@/composables/game/use-game-genre-platform.js';
import type { Game } from '@/models/game';

const props = defineProps<{ game: Game }>();

const { genres, platforms } = useGameGenrePlatform(props.game);
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
