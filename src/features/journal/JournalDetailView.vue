<template>
  <GameDetail
    :game="game"
    :loading="loading"
    :screenshots="screenshots"
    :loading-rating="catalogLoading"
    :rating="rating"
    @close="onClose()"
  />
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GameDetail from '@/components/game-detail/GameDetail.vue';
import useGameDetail from '@/composables/journal/use-game-detail';
import type { UserRating, Game } from '@/models/game';

const route = useRoute();
const router = useRouter();
const {
  loading,
  game,
  load,
  loadScreenshots,
  screenshots,
  clear,
  getGameBySlug,
  catalogLoading,
} = useGameDetail();

const catalogGame = ref<Game>();
const rating = ref<UserRating | Record<string, never>>({});

onMounted(() => {
  load(route.params.id as string);
  loadScreenshots(route.params.id as string);

  if (!catalogLoading.value) {
    const game = getGameBySlug(route.params.id as string);

    game && (catalogGame.value = game);
  }
});

watch(catalogLoading, (value) => {
  if (value) return;

  const game = getGameBySlug(route.params.id as string);

  game && (catalogGame.value = game);
});

watch(catalogGame, (value) => {
  if (!value) return;
  rating.value = value.user_rating || {};
});

const onClose = () => {
  clear();
  router.push({
    name: 'journal',
  });
};
</script>

<style scoped lang="scss"></style>
