import { useMessageStore } from '@/stores/message';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

export default function useSignUp() {
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

  return {
    onLogin,
    loading,
  };
}
