import type { Catalog } from '@/models/catalog';
import type { Game } from '@/models/game';
import { catalogService } from '@/services/catalog.service';
import { defineStore } from 'pinia';

export interface CatalogState {
  catalog?: Catalog;
  loading: boolean;
}

export const useCatalogStore = defineStore({
  id: 'catalog',
  state: () => ({
    catalog: undefined,
    loading: false,
  }) as CatalogState,
  getters: {
    games(): Game[] {
      return this.catalog?.games || [];
    },
  },
  actions: {
    async load(userId: string) {
      this.loading = true;
      const catalog = await catalogService.get(userId);
      this.loading = false;
      this.catalog = catalog;
    },
  },
});