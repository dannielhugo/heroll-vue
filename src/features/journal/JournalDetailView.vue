<template>
  <GameDetail v-if="game" :game="game" :loading="loading" @close="onClose()" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GameDetail from '@/components/game-detail/GameDetail.vue';
import useGameDetail from '@/composables/journal/use-game-detail';

const route = useRoute();
const router = useRouter();
const { loading, game, load } = useGameDetail();

onMounted(() => {
  load(route.params.id as string);
});

const onClose = () => {
  router.push({
    name: 'journal',
  });
};
</script>

<style scoped lang="scss"></style>
