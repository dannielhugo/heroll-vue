<template>
  <div class="search-input-template">
    <el-avatar :size="50" :src="game.background_image" />
    <div class="search-input-template__group">
      <div class="search-input-template__group__name">{{ game.name }}</div>
      <div class="search-input-template__group__genres">{{ genres }}</div>
      <div class="search-input-template__group__platforms">{{ platforms }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameGenrePlatform } from '@/composables/game/use-game-genre-platform.js';
import type { Game } from '@/models/game.js';
const props = defineProps<{ game: Game }>();

const { genres, platforms } = useGameGenrePlatform(props.game);
</script>

<style scoped lang="scss">
.search-input-template {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 10px 3px;

  &__group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    line-height: 1.43;

    &__name {
      font-size: 1rem;
    }

    &__genres {
      font-size: 0.875rem;
    }

    &__platforms {
      font-size: 0.875rem;
      color: var(--el-text-color-placeholder);
      max-width: 70%;
      overflow-wrap: break-word;
    }
  }
}
</style>
