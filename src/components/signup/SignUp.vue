<template>
  <div class="sign-in">
    <div class="sign-in__bg">
      <el-image class="sign-in__bg__img" fit="cover" :src="url" />
      <div class="sign-in__bg__credits">
        Photo by
        <a
          href="https://unsplash.com/@nickhamze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Nick Hamze</a
        >
        on
        <a
          href="https://unsplash.com/s/photos/video-game?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
      </div>
    </div>
    <div class="sign-in__card">
      <el-card class="sign-in__card__el">
        <h1>Heroll - Sign Up</h1>
        <el-button
          type="primary"
          data-testid="signup"
          size="large"
          :icon="UserFilled"
          :loading="loading"
          @click="$emit('signup')"
        >
          Sign Up With Google
        </el-button>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue';

import url from '@/assets/signin-bg.jpg';
defineEmits(['signup']);
defineProps(['loading']);
</script>

<style scoped lang="scss">
.sign-in {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80vh;

  &__bg {
    position: relative;
    height: 400px;
    display: inline-block;

    &__img {
      width: 600px;
      height: 400px;
    }

    &__credits {
      position: absolute;
      left: 5px;
      bottom: 5px;
      color: var(--el-color-info-light-9);
      a {
        color: var(--el-color-info-light-9);
      }
    }
  }

  &__card {
    display: inline-block;
    height: 400px;
    vertical-align: top;

    &__el {
      width: 400px;
      height: 400px;
      text-align: center;

      h1 {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
