import useSignUp from '@/composables/signup/use-signup';
import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';

const mockRouter = {
  push: vi.fn()
};

vi.mock('vue-router', () => ({
  useRouter: () => mockRouter,
}));

vi.mock('@/services/auth.service', () => { });

describe('Use SignUp', () => {
  beforeEach(() => {
    setActivePinia(createTestingPinia());
    mockRouter.push.mockRestore();
  });

  test('should redirect on login', async () => {
    const { onLogin } = useSignUp();

    await onLogin();
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });
});