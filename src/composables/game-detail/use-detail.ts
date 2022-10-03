import { ref, toRefs, watchEffect } from 'vue';
import type { Game, ShortScreenshot, UserRating } from '@/models/game';
import { useGameFormatter } from '@/composables/game/use-game-formatter';
const RATING_KEYS = 5;

export interface DetailProps {
  game: Game | null;
  screenshots: ShortScreenshot[];
  loading: boolean;
  loadingRating: boolean;
  rating: UserRating | Record<string, never>;
}

export default function useDetail(props: DetailProps) {
  const { game, screenshots } = toRefs(props);
  const ratingValue = ref(0);
  const dialogVisible = ref(true);
  const src = ref('');
  const srcList = ref<string[]>([]);

  watchEffect(() => {
    if (!game || !game.value) return;

    src.value = game.value.background_image || '';
    srcList.value = screenshots.value
      ? [
          game.value.background_image || '',
          ...screenshots.value.map((img) => img.image),
        ]
      : [game.value.background_image || ''];
  });

  watchEffect(() => {
    if (!props.rating) return;
    const keys = Object.keys(props.rating).length || RATING_KEYS;

    ratingValue.value =
      Object.values(props.rating).reduce((acc, value) => acc + value, 0) / keys;
  });

  return {
    ratingValue,
    dialogVisible,
    src,
    srcList,
  };
}
