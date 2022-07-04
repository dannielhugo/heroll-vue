import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import GameJournal from '../../journal/GameJournal.vue';

describe('GameJournal', () => {
  test('should mount component', async () => {
    expect(GameJournal).toBeTruthy();

    const wrapper = mount(GameJournal, {
      props: {
        loading: false,
        games: [],
      },
      global: {
        plugins: [ElementPlus],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
