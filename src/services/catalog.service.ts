import type { Catalog } from '@/models/catalog';
import type { Game } from '@/models/game';
import { firebase } from './firebase.service';

const COLLECTION = 'catalog';

class CatalogService {
  async save(catalog: Catalog, userId: string) {
    try {
      return await firebase.add(catalog, COLLECTION, userId);
    } catch (error) {
      console.log(error);
    }
  }

  async get(userId: string): Promise<Catalog> {
    return await firebase.getById(COLLECTION, userId) as Catalog;
  }

  async addGameToCatalog(catalog: Catalog, game: Game ) {
    return await firebase.addDocToArray(COLLECTION, catalog.id, game, 'games');
  }

  async addGamesToCatalog(catalog: Catalog, games: Game[]) {
    return await firebase.addDocsToArray(COLLECTION, catalog.id, games, 'games');
  }

  async removeGameFromCatalog(catalog: Catalog, game: Game) {
    return await firebase.removeDocFromArray(COLLECTION, catalog.id, game, 'games');
  }
}

export const catalogService = new CatalogService();
