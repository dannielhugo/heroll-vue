import { useGameStore } from '@/stores/game';
import { storeToRefs } from 'pinia';

export default function useGameDetail() {
  const gameStore = useGameStore();
  const { loading, game } = storeToRefs(gameStore);

  const { load } = gameStore;

  return { load, loading, game };
}
