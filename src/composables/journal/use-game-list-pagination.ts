import type { Game } from '@/models/game';
import type { Ref } from 'vue';

export default function useGameListPagination(games: Ref<Game[]>) {
  const page = ref(1);
  const gamesInPage = ref<Game[]>([]);
  const perPage = ref(8);
  const total = ref(games.value.length);
  const pages = ref(Math.ceil(games.value.length/perPage.value));
  const list = ref(games.value);

  const paginate = () => {
    const trimStart = (page.value - 1) * perPage.value;
    const trimEnd = trimStart + perPage.value;
    gamesInPage.value = list.value.slice(trimStart, trimEnd);
  };

  watch(games, (newValue) => {
    list.value = newValue;
    total.value = newValue.length;
    pages.value = Math.ceil(list.value.length / perPage.value);
    paginate();
  });

  watch(page, (newPage) => {
    page.value = newPage;
    paginate();
  });

  paginate();

  return {
    gamesInPage,
    total,
    page,
    perPage,
    pages,
  };
}
