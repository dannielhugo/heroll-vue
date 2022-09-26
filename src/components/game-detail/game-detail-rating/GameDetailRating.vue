<template>
  <el-popover
    placement="right"
    :width="250"
    trigger="click"
    v-model:visible="visible"
  >
    <template #reference>
      <div class="game-detail-rating__trigger">
        <el-button
          type="primary"
          :size="triggerButtonSize"
          :icon="Edit"
          @click="setVisible(true)"
          circle
        />
      </div>
    </template>
    <div class="game-detail-rating__content">
      <div class="game-detail-rating__content__rating">
        <span>Graphics</span>
        <HRating @change="onChange($event, 'graphics')" />
      </div>
      <div class="game-detail-rating__content__rating">
        <span>Sound</span>
        <HRating @change="onChange($event, 'sound')" />
      </div>
      <div class="game-detail-rating__content__rating">
        <span>Narrative</span>
        <HRating @change="onChange($event, 'narrative')" />
      </div>
      <div class="game-detail-rating__content__rating">
        <span>Characters Design</span>
        <HRating @change="onChange($event, 'characters')" />
      </div>
      <div class="game-detail-rating__content__rating">
        <span>Gameplay</span>
        <HRating @change="onChange($event, 'gameplay')" />
      </div>
    </div>
    <div class="game-detail-rating__footer">
      <el-button @click="setVisible(false)">Cancel</el-button>
      <el-button type="primary" :disabled="disabled" @click="onSave">
        Save
      </el-button>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { Edit } from '@element-plus/icons-vue';
import HRating from '@/components/utility/HRating.vue';

withDefaults(
  defineProps<{
    rating?: number;
    triggerButtonSize: 'large' | 'default' | 'small';
  }>(),
  {
    triggerButtonSize: 'small',
  },
);

const emit = defineEmits(['save']);

const visible = ref(false);
const ratingMap = new Map();
const graphics = ref<number>(0);
const sound = ref<number>(0);
const narrative = ref<number>(0);
const characters = ref<number>(0);
const gameplay = ref<number>(0);

ratingMap.set('graphics', graphics);
ratingMap.set('sound', sound);
ratingMap.set('narrative', narrative);
ratingMap.set('characters', characters);
ratingMap.set('gameplay', gameplay);

const disabled = ref(true);

const onChange = (value: number, reference: string) => {
  const rate = ratingMap.get(reference);
  rate.value = value;
};

const setVisible = (value: boolean) => {
  visible.value = value;
};

const onSave = () => {
  emit('save', {
    graphics: graphics.value,
    sound: sound.value,
    narrative: narrative.value,
    characters: characters.value,
    gameplay: gameplay.value,
  });
};

watchEffect(() => {
  const value =
    graphics.value &&
    sound.value &&
    narrative.value &&
    characters.value &&
    gameplay.value;

  disabled.value = !value;
});
</script>

<style lang="scss" scoped>
.game-detail-rating {
  &__trigger {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__rating {
      margin-left: 10px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 10px;

    &__rating {
      display: flex;
      flex-direction: column;
    }
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>