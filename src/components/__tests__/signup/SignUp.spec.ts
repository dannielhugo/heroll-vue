import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import SignUp from '../../signup/SignUp.vue';

describe('SignUp', () => {
  test('should mount component', async () => {
    expect(SignUp).toBeTruthy();

    const wrapper = mount(SignUp, {
      props: {
        loading: false,
      },
      global: {
        plugins: [ElementPlus],
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should emit signup event', () => {
    const wrapper = mount(SignUp, {
      props: {
        loading: false,
      },
      global: {
        plugins: [ElementPlus],
      }
    });

    wrapper.find('[data-testid=signup]').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('signup')
  });
});