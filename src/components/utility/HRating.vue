<template>
  <el-rate
    v-model="value"
    allow-half
    size="large"
    show-text
    :disabled="disabled"
    :texts="rateLabels"
    :void-icon="Trophy"
    :icons="[TrophyBase, TrophyBase, TrophyBase]"
    :colors="colors"
    @change="onChange"
    class="h-rating"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Trophy, TrophyBase } from '@element-plus/icons-vue';

const props = defineProps<{ disabled?: boolean; defaultValue?: number }>();

const rateLabels = ['Not worthy', 'Bad', 'Ok', 'Great', 'Wonderful'];

const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']);
const value = ref<number>(props.defaultValue || 0);

const emit = defineEmits(['change']);

const onChange = () => {
  emit('change', value.value);
};
</script>

<style lang="scss" scoped>
.h-rating {
  &:deep(.el-rate__icon) {
    height: 1.5em;
    width: 1.5em;

    svg {
      height: 1.5em;
      width: 1.5em;
    }
  }
}
</style>