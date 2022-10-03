<template>
  <div class="game-detail-general-info" v-if="!loading">
    <div class="game-detail-general-info__row">
      <GameDetailInfo
        title="Released"
        :value="released"
        class="game-detail-general-info__row__component"
      />
      <GameDetailInfo
        title="Publishers"
        :value="publishers"
        class="game-detail-general-info__row__component"
      />
    </div>

    <div class="game-detail-general-info__row">
      <GameDetailInfo
        title="Genres"
        :value="genres"
        class="game-detail-general-info__row__component"
      />
      <GameDetailInfo
        title="Platforms"
        :value="platforms"
        class="game-detail-general-info__row__component"
      />
    </div>

    <GameDetailInfo
      v-if="game?.description_raw"
      :value="game.description_raw"
      title="About"
    />
  </div>
  <el-skeleton v-else :rows="5" animated />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useGameFormatter } from '@/composables/game/use-game-formatter';
import GameDetailInfo from '../game-detail-info/GameDetailInfo.vue';
import type { Game } from '@/models/game';

const genres = ref<string>();
const platforms = ref<string>();
const released = ref<string>();
const publishers = ref<string>();

const props = defineProps<{
  game: Game | null;
  loading: boolean;
}>();

watchEffect(() => {
  if (!props.game) return;

  const {
    genres: g,
    platforms: p,
    released: r,
    publishers: pub,
  } = useGameFormatter(props.game);

  genres.value = g;
  platforms.value = p;
  released.value = r;
  publishers.value = pub;
});
</script>

<style lang="scss" scoped>
.game-detail-general-info {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    flex-direction: row;

    &__component {
      width: 50%;
    }
  }
}
</style>
