<template>
  <div class="detail">
    <el-dialog
      v-model="dialogVisible"
      :title="game.name"
      :before-close="handleClose"
      width="90%"
    >
      <template #header="{ titleId }">
        <div class="detail__header" v-if="!loading">
          <h1 :id="titleId">{{ game.name }}</h1>
        </div>
        <el-skeleton v-else :rows="0" animated />
      </template>

      <div class="detail__info__row">
        <GameDetailInfo
          title="Released"
          :value="released"
          class="detail__info__row__component"
        />
        <GameDetailInfo
          title="Publishers"
          :value="publishers"
          class="detail__info__row__component"
        />
      </div>

      <div class="detail__info__row">
        <GameDetailInfo
          title="Genres"
          :value="genres"
          class="detail__info__row__component"
        />
        <GameDetailInfo
          title="Platforms"
          :value="platforms"
          class="detail__info__row__component"
        />
      </div>

      <span v-if="!loading">{{ game.description_raw }}</span>
      <el-skeleton v-else :rows="5" animated />

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
import { useGameFormatter } from '@/composables/game/use-game-formatter';
import GameDetailInfo from './game-detail-info/GameDetailInfo.vue';
import type { Game } from '@/models/game';

const dialogVisible = ref(true);

const props = defineProps<{ game: Game; loading: boolean }>();
const emit = defineEmits(['close']);

const { genres, platforms, released, publishers } = useGameFormatter(
  props.game
);

const close = () => {
  dialogVisible.value = false;
  emit('close');
};

const handleClose = (done: () => void) => {
  dialogVisible.value = false;
  emit('close');
  done();
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
    &__row {
      display: flex;
      flex-direction: row;

      &__component {
        width: 50%;
      }
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