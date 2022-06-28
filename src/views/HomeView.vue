<script setup lang="ts">
import type { User } from '@/models/user';
import { registerAuthStateChanged } from '@/services/auth.service';
import { useUserStore } from '@/stores/user';
import { RouterView } from 'vue-router';

const userStore = useUserStore();

const { updateUser } = userStore;

registerAuthStateChanged(
  (user: User) => {
    updateUser(user);
  },
  () => {
    console.error('User not loaded');
  },
);
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
