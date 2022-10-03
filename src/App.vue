<template>
  <el-container class="app-container">
    <el-main class="app-container__main">
      <h1 class="app-container__main__title">{{ title }}</h1>
      <RouterView />
    </el-main>
    <AlertMessage class="app-container__message" />
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import AlertMessage from '@/features/utility/AlertMessage.vue';
import router from './router/index';
const route = useRoute();

const title = ref<string>((route.meta.title as string) || '');

router.beforeEach((to) => {
  title.value = to.meta.title as string;
});
</script>

<style lang="scss">
@import '@/assets/base.css';
.app-container {
  position: relative;
  height: 100%;

  &__message {
    position: absolute;
    bottom: 60px;
    left: 40%;
    width: 30%;
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;

    &__title {
      align-self: flex-start;
      font-size: 3rem;
      color: var(--el-color-primary);
    }

    @media (min-width: 1536px) {
      max-width: 1536px;
    }
  }
}
</style>
