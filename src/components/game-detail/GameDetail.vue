<template>
  <div class="detail">
    <el-dialog v-model="dialogVisible" :before-close="handleClose" width="90%">
      <template #header="{ titleId }">
        <div class="detail__header" v-if="!loading">
          <h1 :id="titleId">{{ game?.name }}</h1>
        </div>
        <el-skeleton v-else :rows="0" animated />
      </template>

      <div class="detail__info" v-if="!loading">
        <div class="detail__info__left">
          <div class="detail__info__left__row">
            <GameDetailInfo
              title="Released"
              :value="released"
              class="detail__info__left__row__component"
            />
            <GameDetailInfo
              title="Publishers"
              :value="publishers"
              class="detail__info__left__row__component"
            />
          </div>

          <div class="detail__info__left__row">
            <GameDetailInfo
              title="Genres"
              :value="genres"
              class="detail__info__left__row__component"
            />
            <GameDetailInfo
              title="Platforms"
              :value="platforms"
              class="detail__info__left__row__component"
            />
          </div>

          <GameDetailInfo
            v-if="game?.description_raw"
            :value="game.description_raw"
            title="About"
          />
          <span>{{}}</span>
        </div>
        <div class="detail__info__right" v-if="game">
          <GameDetailGallery :src="src" :src-list="srcList" />
        </div>
      </div>
      <el-skeleton v-else :rows="5" animated />

      <GameDetailInfo
        v-if="!loadingRating"
        title="Rating"
        class="detail__info__left__row__component"
      >
        <template #title-complement>
          <GameDetailRating trigger-button-size="small" />
        </template>
        <HRating :disabled="true" :default-value="ratingValue" />
      </GameDetailInfo>
      <el-skeleton v-else :rows="0" animated />

      <template #footer>
        <div class="detail__footer" v-if="!loading">
          <el-button @click="close()">Cancel</el-button>
          <el-button type="primary" @click="close()">Confirm</el-button>
        </div>
        <div class="detail__footer" v-else>
          <el-skeleton class="detail__footer__skeleton" animated>
            <template #template>
              <el-skeleton-item variant="button" />
              <el-skeleton-item variant="button" />
            </template>
          </el-skeleton>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watchEffect, watch } from 'vue';
import type { Game, ShortScreenshot, UserRating } from '@/models/game';
import { useGameFormatter } from '@/composables/game/use-game-formatter';
import GameDetailInfo from './game-detail-info/GameDetailInfo.vue';
import GameDetailRating from './game-detail-rating/GameDetailRating.vue';
import HRating from '@/components/utility/HRating.vue';

const RATING_KEYS = 5;
const dialogVisible = ref(true);
const src = ref('');
const srcList = ref<string[]>([]);

const props = defineProps<{
  game: Game | null;
  screenshots: ShortScreenshot[];
  loading: boolean;
  loadingRating: boolean;
  rating: UserRating | Record<string, never>;
}>();
const emit = defineEmits(['close']);

const { game, screenshots } = toRefs(props);

const close = () => {
  dialogVisible.value = false;
  emit('close');
};

const handleClose = (done: () => void) => {
  dialogVisible.value = false;
  emit('close');
  done();
};

const { genres, platforms, released, publishers } = useGameFormatter(
  game.value,
);
const ratingValue = ref(0);

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
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 0 auto;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      margin: 0;
      font-size: 3.75em;
      color: var(--el-color-primary-dark-2);
      font-weight: normal;
    }
  }

  &__info {
    display: flex;
    flex-direction: row;

    &__left {
      width: 50%;
      &__row {
        display: flex;
        flex-direction: row;

        &__component {
          width: 50%;
        }
      }
    }

    &__right {
      width: 50%;
      padding: 20px;
    }
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 15px;

    &__skeleton {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 15px;
    }
  }
}
</style>