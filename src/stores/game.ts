import type { Game, ShortScreenshot } from '@/models/game';
import { Factory } from '@/services/factory.service';
import { defineStore } from 'pinia';

export interface GameState {
  loading: boolean;
  loadingScreenshots: boolean;
  game?: Game;
  screenshots: ShortScreenshot[];
}

export const useGameStore = defineStore({
  id: 'game',
  state: () =>
    ({
      game: undefined,
      loading: false,
      loadingScreenshots: false,
      screenshots: [],
    } as GameState),
  actions: {
    async load(id: string) {
      this.loading = true;
      const response = await Factory.gameService().detail(id);
      this.loading = false;
      this.game = response;
    },
    async loadScreenshots(id: string) {
      this.loadingScreenshots = true;
      const response = await Factory.gameService().screenshots(id);
      this.loadingScreenshots = false;
      this.screenshots = response;
    },
    clear() {
      this.game = undefined;
      this.loading = false;
      this.loadingScreenshots = false;
      this.screenshots = [];
    },
  },
})