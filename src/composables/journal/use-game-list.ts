import { watch, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCatalogStore } from '@/stores/catalog';
import { useUserStore } from '@/stores/user';
import type { User } from '@/models/user';
import type { Game } from '@/models/game';
import type { Catalog } from '@/models/catalog';

export default function useGameList() {
  const userStore = useUserStore();
  const catalogStore = useCatalogStore();
  const { user } = storeToRefs(userStore);
  const { loading, catalog } = storeToRefs(catalogStore);
  const { load } = catalogStore;
  const games = ref<Game[]>(catalog?.value?.games || []);

  watch(user, async (newValue: User) => {
    if (newValue) {
      await load(newValue.id);
    }
  });

  watch(catalog, (newValue: Catalog) => {
    games.value = newValue.games;
  });

  return { games, loading, catalog };
};