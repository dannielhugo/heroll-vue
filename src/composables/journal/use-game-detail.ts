import { useCatalogStore } from '@/stores/catalog';
import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';

export default function useGameDetail() {
  const gameStore = useGameStore();
  const catalogStore = useCatalogStore();

  const { loading, game, loadingScreenshots, screenshots } =
    storeToRefs(gameStore);
  const { getGameBySlug } = catalogStore;
  const { loading: catalogLoading } = storeToRefs(catalogStore);

  const { load, loadScreenshots, clear } = gameStore;

  return {
    load,
    loading,
    game,
    loadScreenshots,
    loadingScreenshots,
    screenshots,
    clear,
    getGameBySlug,
    catalogLoading,
  };
}
