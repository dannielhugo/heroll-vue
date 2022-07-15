import HPagination from '@/components/utility/HPagination.vue';
import ElementPlus from 'element-plus';
import { mount } from '@vue/test-utils';

describe('HPagination', () => {
  test('should mount component', async () => {
    expect(HPagination).toBeTruthy();

    const wrapper = mount(HPagination, {
      props: {
        loading: false,
        total: 100,
        pageSize: 10,
        currentPage: 1,
      },
      global: {
        plugins: [ElementPlus],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should emit event on page change', async () => {
    const wrapper = mount(HPagination, {
      props: {
        loading: false,
        total: 100,
        pageSize: 10,
        currentPage: 1,
      },
      global: {
        plugins: [ElementPlus],
      },
    });

    wrapper.vm.onPageChanged(1);
    expect(wrapper.emitted('page-changed')).toBeTruthy();
  })
});
