<template>
  <div class="search-input">
    <el-autocomplete
      class="search-input__search-popover"
      v-model="value"
      size="large"
      :fetch-suggestions="querySearch"
      :reset="onClear"
      :placeholder="placeholder"
      :trigger-on-focus="false"
      clearable
      @select="onSelect"
    >
      <template #default="{ item }">
        <HSearchInputTemplate :game="item" />
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import useGameSearch from '@/composables/search/use-game-search.js';
import type { Game } from '@/models/game.js';

import { ref } from 'vue';

const value = ref('');

const { reset, search, results } = useGameSearch();
const emit = defineEmits(['selected']);

withDefaults(
  defineProps<{
    placeholder?: string;
  }>(),
  {
    placeholder: 'Find a game',
  },
);

const querySearch = (q: string, cb: (r: Game[]) => void) => {
  const action = async () => {
    await search(q);
    cb(results.value);
  };

  action();
};

const onClear = () => {
  reset();
};

const onSelect = (item: unknown) => {
  emit('selected', item as Game);
};
</script>

<style scoped lang="scss">
.search-input :deep(.search-input__search-popover) {
  width: 100%;
}
</style>
