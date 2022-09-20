import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';

export default function useGameDetail() {
  const gameStore = useGameStore();
  const { loading, game, loadingScreenshots, screenshots } =
    storeToRefs(gameStore);

  const { load, loadScreenshots, clear } = gameStore;

  return {
    load,
    loading,
    game,
    loadScreenshots,
    loadingScreenshots,
    screenshots,
    clear,
  };
}
