<script setup lang="ts">
import type { User } from '@/models/user';
import { Factory } from '@/services/factory.service';
import { useUserStore } from '@/stores/user';
import { RouterView } from 'vue-router';

const userStore = useUserStore();

const { updateUser } = userStore;

Factory.authService().registerAuthStateChanged(
  (user: User) => {
    updateUser(user);
  },
  () => {
    console.error('User not loaded');
  },
);
</script>

<template>
  <RouterView />
</template>
