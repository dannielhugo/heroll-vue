import type { Game } from './game';
import type { Serializable } from './serializable';

export interface Catalog extends Serializable {
  games: Game[];
}
