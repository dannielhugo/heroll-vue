import type { Game } from '@/models/game';
import { Factory } from '@/services/factory.service';
import { defineStore } from 'pinia';

export interface SearchState {
  loading: boolean;
  results: Game[];
}

export const useSearchStore = defineStore({
  id: 'search',
  state: () =>
    ({
      results: [],
      loading: false,
    } as SearchState),
  actions: {
    async search(q: string) {
      this.loading = true;
      const response = await Factory.gameService().search(q);
      this.loading = false;
      this.results = response.results;
    },
    clear() {
      this.results = [];
      this.loading = false;
    },
  },
});
