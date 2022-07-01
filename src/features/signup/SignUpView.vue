<template>
  <SignUp @signup="onLogin" :loading="loading" />
</template>

<script setup lang="ts">
import SignUp from '@/components/signup/SignUp.vue';
import useSignUp from '@/composables/signup/use-signup';
const { onLogin, loading } = useSignUp();
</script>

<style scoped></style>
