<template>
  <SignUp @signup="onLogin" :loading="loading" />
</template>

<script setup lang="ts">
import SignUp from '@/components/signup/SignUp.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const userStore = useUserStore();

const router = useRouter();
const { loading } = storeToRefs(userStore);
const { login } = userStore;

const onLogin = async () => {
  await login();
  router.push('/');
};
</script>

<style scoped></style>
