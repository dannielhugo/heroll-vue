import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import ElementPlus from 'element-plus';
import AlertMessage from '@/features/utility/AlertMessage.vue';

describe('AlertMessage', () => {
  test('should mount component', async () => {
    expect(AlertMessage).toBeTruthy();

    const wrapper = mount(AlertMessage, {
      global: {
        plugins: [
          ElementPlus, 
          createTestingPinia({
            initialState: {
              message: {
                message: 'An error',
                type: 'error',
                show: true,
              }, 
            },
          }),
        ],
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
