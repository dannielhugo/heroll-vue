import type { Catalog } from '@/models/catalog';
import type { Game } from '@/models/game';
import { Factory } from './factory.service';

const COLLECTION = 'catalog';

export class CatalogService {
  async save(catalog: Catalog, userId: string) {
    const firebase = Factory.firebaseService();

    try {
      return await firebase.add(catalog, COLLECTION, userId);
    } catch (error) {
      console.log(error);
    }
  }

  async get(userId: string): Promise<Catalog> {
    const firebase = Factory.firebaseService();

    return await firebase.getById(COLLECTION, userId) as Catalog;
  }

  async addGameToCatalog(catalog: Catalog, game: Game ) {
    const firebase = Factory.firebaseService();

    return await firebase.addDocToArray(COLLECTION, catalog.id, game, 'games');
  }

  async addGamesToCatalog(catalog: Catalog, games: Game[]) {
    const firebase = Factory.firebaseService();

    return await firebase.addDocsToArray(COLLECTION, catalog.id, games, 'games');
  }

  async removeGameFromCatalog(catalog: Catalog, game: Game) {
    const firebase = Factory.firebaseService();

    return await firebase.removeDocFromArray(COLLECTION, catalog.id, game, 'games');
  }
}
