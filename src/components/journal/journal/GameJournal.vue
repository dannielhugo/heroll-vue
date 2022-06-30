<template>
  <div v-loading="loading" class="container">
    <GridView :games="games" />
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCatalogStore } from '@/stores/catalog';
import { useUserStore } from '@/stores/user';
import type { User } from '@/models/user';
import type { Game } from '@/models/game';
import GridView from '../grid-view/GridView.vue';
import type { Catalog } from '@/models/catalog';

const userStore = useUserStore();
const catalogStore = useCatalogStore();
const { user } = storeToRefs(userStore);
const { loading, catalog } = storeToRefs(catalogStore);
const { load } = catalogStore;
const games = ref<Game[]>(catalog?.value?.games || []);

watch(user, async (newValue: User) => {
  if (newValue) {
    await load(newValue.id);
  }
});

watch(catalog, (newValue: Catalog) => {
  games.value = newValue.games;
});
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  margin: auto;

  @media (min-width: 1536px) {
    max-width: 1536px;
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
