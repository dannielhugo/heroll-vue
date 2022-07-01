import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import GridView from '../../../journal/grid-view/GridView.vue';

describe('GridView', () => {
  test('should mount component', async () => {
    expect(GridView).toBeTruthy();

    const wrapper = mount(GridView, {
      props: {
        games: [],
      },
      global: {
        plugins: [ElementPlus],
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});