import type { Game } from '@/models/game';
import { Factory } from '@/services/factory.service';
import { defineStore } from 'pinia';

export interface GameState {
  loading: boolean;
  game?: Game;
}

export const useGameStore = defineStore({
  id: 'game',
  state: () =>
    ({
      game: undefined,
      loading: false,
    } as GameState),
  actions: {
    async load(id: string) {
      this.loading = true;
      const response = await Factory.gameService().detail(id);
      this.loading = false;
      this.game = response;
    },
    clear() {
      this.game = undefined;
      this.loading = false;
    },
  },
})