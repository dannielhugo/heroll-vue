<template>
  <div v-loading="loading" class="journal-container">
    <GridView :games="games" @detail="onDetail" />
  </div>
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GridView from './grid-view/GridView.vue';
defineProps<{ games: Game[]; loading: boolean }>();

const emit = defineEmits(['detail']);

const onDetail = (game: Game) => {
  emit('detail', game);
};
</script>

<style scoped lang="scss">
.journal-container {
  width: 100%;
}
</style>