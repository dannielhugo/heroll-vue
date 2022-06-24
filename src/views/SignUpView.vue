<template>
  <SignUp @signup="onLogin" :loading="loading" />
</template>

<script setup lang="ts">
import SignUp from '@/components/signup/SignUp.vue';
import { useMessageStore } from '@/stores/message';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const messageStore = useMessageStore();

const router = useRouter();
const { loading } = storeToRefs(userStore);
const { login, stopLoading } = userStore;
const { error } = messageStore;

const onLogin = async () => {
  try {
    await login();
    router.push('/');
  } catch (e) {
    stopLoading();
    error('Login attempt failed');
  }
};
</script>

<style scoped></style>
