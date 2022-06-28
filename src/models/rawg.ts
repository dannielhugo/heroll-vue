import { Game } from './game';

export interface RawgSearchResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Game[];
  user_platforms: boolean;
}
