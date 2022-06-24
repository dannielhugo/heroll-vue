import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import ElementPlus from 'element-plus';
import SignUpView from '@/views/SignUpView.vue';

const mockRouter = {
  push: vi.fn()
};

vi.mock('vue-router', () => ({
  useRouter: () => mockRouter,
}));

describe('SignUpView', () => {
  
  beforeEach(() => {
    mockRouter.push.mockRestore();
  });

  test('should mount component', async () => {
    expect(SignUpView).toBeTruthy();

    const wrapper = mount(SignUpView, {
      global: {
        plugins: [
          ElementPlus,
          createTestingPinia({
            initialState: {
              user: {
                loading: false,
              },
              message: {
                show: false,
                message: '',
                type: 'error'
              }
            },
          }),
        ],
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should redirect on login', async () => {
    const wrapper = mount(SignUpView, {
      global: {
        plugins: [
          ElementPlus,
          createTestingPinia({
            initialState: {
              user: {
                loading: false,
              },
              message: {
                show: false,
                message: '',
                type: 'error'
              }
            },
          }),
        ],
      }
    });

    await wrapper.vm.onLogin();
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });
});