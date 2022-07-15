<template>
  <GameJournal :loading="loading" :games="gamesInPage" />
  <HPagination
    class="journal-view__pagination"
    :total="total"
    :loading="loading"
    :page-size="perPage"
    :current-page="page"
    @page-changed="onPageChanged"
  />
</template>

<script setup lang="ts">
import GameJournal from '@/components/journal/GameJournal.vue';
import HPagination from '@/components/utility/HPagination.vue';
import useGameList from '@/composables/journal/use-game-list';
import useGameListPagination from '@/composables/journal/use-game-list-pagination';
const { loading, games } = useGameList();
const { gamesInPage, page, total, perPage } = useGameListPagination(games);

const onPageChanged = (newPage: number) => {
  page.value = newPage;
};
</script>

<style scoped lang="scss">
.journal-view {
  &__pagination {
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>
