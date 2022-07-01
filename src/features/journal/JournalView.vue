<template>
  <GameJournal :loading="loading" :games="games" />
</template>

<script setup lang="ts">
import GameJournal from '@/components/journal/GameJournal.vue';
import useGameList from '@/composables/journal/use-game-list';
const { loading, games } = useGameList();
</script>

<style scoped></style>
