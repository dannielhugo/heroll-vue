import { defineStore } from 'pinia';

export interface MessageState {
  message: string;
  type: 'warning' | 'success' | 'error',
  show: boolean;
}

export const useMessageStore = defineStore({
  id: 'message',
  state: () => ({
    message: '',
    type: 'error',
    show: false,
  }) as MessageState,
  actions: {
    error(message: string) {
      this.message = message;
      this.type = 'error';
      this.show = true;
    },
    success(message: string) {
      this.message = message;
      this.type = 'success';
      this.show = true;
    },
    warning(message: string) {
      this.message = message;
      this.type = 'warning';
      this.show = true;
    },
    dismiss() {
      this.message = '';
      this.type = 'error';
      this.show = false;
    },
  },
});
