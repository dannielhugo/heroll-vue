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
  width: 100%;
}
</style>
