import type { Game } from '@/models/game';
import { useRouter } from 'vue-router';

export default function useGameAdd() {
  const router = useRouter();

  const onAdd = (game: Game) => {
    router.push({
      name: 'detail',
      params: {
        id: game.slug,
      },
    });
  };

  return {
    onAdd,
  };
}
