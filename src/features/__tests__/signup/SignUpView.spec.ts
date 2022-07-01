import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import SignUpView from '@/features/signup/SignUpView.vue';

vi.mock('@/composables/signup/use-signup', () => ({
  default: () => ({
    onLogin: vi.fn(),
    loading: false,
  })
}));

describe('SignUpView', () => {
  test('should mount component', async () => {
    expect(SignUpView).toBeTruthy();

    const wrapper = mount(SignUpView, {
      global: {
        plugins: [
          ElementPlus,
        ],
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});