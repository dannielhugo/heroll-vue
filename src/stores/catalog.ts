import type { Catalog } from '@/models/catalog';
import type { Game } from '@/models/game';
import { Factory } from '@/services/factory.service';
import { defineStore } from 'pinia';

export interface CatalogState {
  catalog: Catalog;
  loading: boolean;
}

export const useCatalogStore = defineStore({
  id: 'catalog',
  state: () =>
    ({
      catalog: {},
      loading: false,
    } as CatalogState),
  getters: {
    games(state): Game[] {
      return state.catalog.games || [];
    },

    getGameBySlug: (state) => {
      return (slug: string) => {
        console.log(state.catalog.games);

        return (
          state.catalog.games?.find((game: Game) => {
            return `${game.slug}` === `${slug}`;
          }) || null
        );
      }
    },
  },
  actions: {
    async load(userId: string) {
      this.loading = true;
      const catalog = await Factory.catalogService().get(userId);
      this.loading = false;
      this.catalog = catalog;
    },
  },
});
