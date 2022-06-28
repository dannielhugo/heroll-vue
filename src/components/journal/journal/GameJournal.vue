<template>
  <GridView :games="games" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useCatalogStore } from '@/stores/catalog';
import GridView from '../grid-view/GridView.vue';

const userStore = useUserStore();
const catalogStore = useCatalogStore();
const { user } = storeToRefs(userStore);
const { games, load } = catalogStore;

onMounted(() => {
  if (user?.value) {
    load(user.value.id);
  }
});

</script>

<style scoped></style>
