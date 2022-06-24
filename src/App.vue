<script setup lang="ts">
import { RouterView } from 'vue-router';
import AlertMessage from '@/components/utility/AlertMessage.vue';
</script>

<template>
  <el-container class="app-container">
    <el-main>
      <RouterView />
    </el-main>
    <AlertMessage class="app-container__message"/>
  </el-container>
</template>

<style lang="scss">
@import '@/assets/base.css';
.app-container {
  position: relative;
  height: 100vh;

  &__message {
    position: absolute;
    bottom: 60px;
    left: 40%;
    width: 30%;
  }
}
</style>
