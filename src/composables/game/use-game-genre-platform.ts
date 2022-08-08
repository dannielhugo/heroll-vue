import type { Game } from '@/models/game';

export function useGameGenrePlatform(game: Game) {
  const platforms = game.platforms?.reduce((curr, game) => {
    if (curr === '') return game.platform.name;
    return `${curr}, ${game.platform.name}`;
  }, '');

  const genres = game.genres?.reduce((curr, genre) => {
    if (curr === '') return genre.name;
    return `${curr}, ${genre.name}`;
  }, '');

  return {
    genres,
    platforms,
  };
}
