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
          <GameDetailRating
            trigger-button-size="small"
            :visible="ratingVisible"
            @open="handleRatePopover(true)"
            @close="handleRatePopover(false)"
          />
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
import { ref } from 'vue';
import GameDetailInfo from './game-detail-info/GameDetailInfo.vue';
import GameDetailRating from './game-detail-rating/GameDetailRating.vue';
import HRating from '@/components/utility/HRating.vue';
import useDetail from '@/composables/game-detail/use-detail';
import type { Game, ShortScreenshot, UserRating } from '@/models/game';

const props = defineProps<{
  game: Game | null;
  screenshots: ShortScreenshot[];
  loading: boolean;
  loadingRating: boolean;
  rating: UserRating | Record<string, never>;
}>();

const ratingVisible = ref<boolean>(false);

const emit = defineEmits(['close']);

const {
  ratingValue,
  dialogVisible,
  genres,
  platforms,
  released,
  publishers,
  src,
  srcList,
} = useDetail(props);

const close = () => {
  dialogVisible.value = false;
  ratingVisible.value = false;
  emit('close');
};

const handleClose = (done: () => void) => {
  dialogVisible.value = false;
  ratingVisible.value = false;
  emit('close');
  done();
};

const handleRatePopover = (opened: boolean) => {
  ratingVisible.value = opened;
};
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