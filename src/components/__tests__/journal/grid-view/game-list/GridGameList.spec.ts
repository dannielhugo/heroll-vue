import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import GridGameList from '../../../../journal/grid-view/game-list/GridGameList.vue';
import * as game from '../../../mocks/Game.json';

describe('GridGameList', () => {
  test('should mount component', async () => {
    expect(GridGameList).toBeTruthy();

    const wrapper = mount(GridGameList, {
      props: {
        games: [game],
      },
      global: {
        plugins: [ElementPlus],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
