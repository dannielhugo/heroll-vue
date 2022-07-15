import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import GridGameItem from '../../../../journal/grid-view/game-item/GridGameItem.vue';
import * as game from '../../../mocks/Game.json';

describe('GridGameItem', () => {
  test('should mount component', async () => {
    expect(GridGameItem).toBeTruthy();

    const wrapper = mount(GridGameItem, {
      props: {
        game,
      },
      global: {
        plugins: [ElementPlus],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
