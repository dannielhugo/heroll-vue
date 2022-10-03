<template>
  <div class="journal-view__search">
    <HSearchInput @selected="onAdd" />
  </div>
  <GameJournal :loading="loading" :games="gamesInPage" @detail="onDetail" />
  <HPagination
    class="journal-view__pagination"
    :total="total"
    :loading="loading"
    :page-size="perPage"
    :current-page="page"
    @page-changed="onPageChanged"
  />

  <RouterView />
</template>

<script setup lang="ts">
import type { Game } from '@/models/game';
import GameJournal from '@/components/journal/GameJournal.vue';
import HSearchInput from '@/components/search/HSearchInput.vue';
import HPagination from '@/components/utility/HPagination.vue';
import useGameAdd from '@/composables/journal/use-game-add';
import useGameList from '@/composables/journal/use-game-list';
import useGameListPagination from '@/composables/journal/use-game-list-pagination';
import { useRouter } from 'vue-router';

const { loading, games } = useGameList();
const { onAdd } = useGameAdd();
const { gamesInPage, page, total, perPage } = useGameListPagination(games);
const router = useRouter();

const onPageChanged = (newPage: number) => {
  page.value = newPage;
};

const onDetail = (game: Game) => {
  router.push({
    name: 'detail',
    params: {
      id: game.slug,
    },
  });
};
</script>

<style scoped lang="scss">
.journal-view {
  &__pagination {
    justify-content: center;
    margin-top: 1rem;
  }

  &__search {
    margin-bottom: 2rem;
    align-self: left;
    width: 33%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>