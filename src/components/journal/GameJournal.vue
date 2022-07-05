<template>
  <div v-loading="loading" class="journal-container">
    <GridView :games="games" />
  </div>
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GridView from './grid-view/GridView.vue';
defineProps<{ games: Game[]; loading: boolean }>();
</script>

<style scoped lang="scss">
.journal-container {
  height: 90vh;
  width: 100%;
  margin: auto;

  @media (min-width: 1536px) {
    max-width: 1536px;
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
