import type { User } from '@/models/user';
import { login } from '@/services/auth.service';
import { defineStore } from 'pinia';
import { useMessageStore } from './message';

export interface UserState {
  user?: User;
  loading: boolean;
}

export const useUserStore = defineStore({
  id: 'user',
  state:() => ({
    user: undefined,
    loading: false,
  }) as UserState,
  actions: {
    async login() {
      try {
        this.loading = true;
        const user = await login();
        this.user = user;
        this.loading = false;
      } catch (e) {
        const messageStore = useMessageStore();
        const { error } = messageStore;

        error('Login attempt failed');
      }
    },
  },
});
