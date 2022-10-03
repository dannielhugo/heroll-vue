import type { Game } from '@/models/game';
import moment from 'moment';

export function useGameFormatter(game: Game | null) {
  const platforms = game?.platforms?.reduce((curr, game) => {
    if (curr === '') return game.platform.name;
    return `${curr}, ${game.platform.name}`;
  }, '');

  const genres = game?.genres?.reduce((curr, genre) => {
    if (curr === '') return genre.name;
    return `${curr}, ${genre.name}`;
  }, '');

  const publishers =
    game?.publishers?.reduce((curr, publisher) => {
      if (curr === '') return publisher.name;
      return `${curr}, ${publisher.name}`;
    }, '') || 'NA';

  const released = game?.released
    ? moment(game?.released, 'YYYY-MM-DD').format('MMM DD, YYYY')
    : 'NA';

  return {
    genres,
    platforms,
    publishers,
    released,
  };
}
