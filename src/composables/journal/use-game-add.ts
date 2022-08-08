import type { Game } from '@/models/game';

export default function useGameAdd() {
  const onAdd = (game: Game) => {
    console.log(game);
  };

  return {
    onAdd,
  };
}
