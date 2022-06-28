export interface Game {
  slug: string;
  name: string;
  playtime: number;
  platforms: Platform[];
  stores: Store[];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number | null;
  suggestions_count: number;
  updated: string;
  id: number;
  score: null;
  clip: null;
  esrb_rating: EsrbRating | null;
  user_game: null;
  reviews_count: number;
  community_rating: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: ShortScreenshot[];
  parent_platforms: Platform[];
  genres: WithSlug[];
  user_rating?: UserRating,
  description?: string,
  description_raw?: string,
  publishers?: Developer[],
  developers?: Developer[],
  detailed?: boolean,
}

export interface AddedByStatus {
  yet?: number;
  owned?: number;
  toplay?: number;
  dropped?: number;
  beaten?: number;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
  name_en: string;
  name_ru: string;
}

export interface WithSlug {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: WithSlug;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface UserRating {
  graphics: number;
  sound: number;
  gameplay: number;
  narrative: number;
  characters: number;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Store {
  store: WithSlug;
}

export enum Language {
  Eng = 'eng',
  Rus = 'rus',
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: string;
  language?: Language;
}
