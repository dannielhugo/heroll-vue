import type { User } from '@/models/user';
import { login } from '@/services/auth.service';
import { defineStore } from 'pinia';

export interface UserState {
  user: User;
  loading: boolean;
}

export const useUserStore = defineStore({
  id: 'user',
  state:() => ({
    loading: false,
    user: {},
  }) as UserState,
  actions: {
    async login() {
      this.loading = true;
      const user = await login();
      this.user = user;
      this.loading = false;
    },
    stopLoading() {
      this.loading = false;
    },
    updateUser(user: User) {
      this.user = user;
    },
  },
});
