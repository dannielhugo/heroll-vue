<template>
  <GameJournal :loading="loading" :games="gamesInPage" />
  <HPagination
    :total="total"
    :loading="false"
    :page-size="perPage"
    :current-page="page"
    @page-changed="onPageChanged"
  />
</template>

<script setup lang="ts">
import GameJournal from '@/components/journal/GameJournal.vue';
import useGameList from '@/composables/journal/use-game-list';
import useGameListPagination from '@/composables/journal/use-game-list-pagination';
const { loading, games } = useGameList();
const { gamesInPage, page, total, perPage } = useGameListPagination(games);

const onPageChanged = (newPage: number) => {
  page.value = newPage;
};
</script>

<style scoped></style>
