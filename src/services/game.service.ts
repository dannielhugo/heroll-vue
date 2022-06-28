import type { Game } from '@/models/game';
import type { RawgSearchResponse } from '@/models/rawg';
import { DateTime } from 'luxon';
import { RawgService } from './rawg.service';

const PAGE_SIZE = 10;
const GAMES_PATH = '/games';

export class GameService {
  static async searchGames(query = ''): Promise<RawgSearchResponse> {
    const response = await RawgService.get(GAMES_PATH, {
      params: {
        page_size: PAGE_SIZE,
        search: query,
        search_precise: true,
        dates: `1960-01-01,${DateTime.now().toFormat('yyyy-MM-dd')}`,
      },
    });

    return response.data;
  }

  static async highestMetacriticsScore(size: number): Promise<RawgSearchResponse> {
    const response = await RawgService.get(GAMES_PATH, {
      params: {
        page_size: size,
        dates: `1960-01-01,${DateTime.now().toFormat('yyyy-MM-dd')}`,
        ordering: '-metacritic',
      },
    });

    return response.data;
  }

  static async detailGame(gameId: number | string): Promise<Game>{
    const URL = `${GAMES_PATH}/${gameId}`;
    const response = await RawgService.get(URL);

    return response.data;
  }
}