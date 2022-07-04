import { mount } from '@vue/test-utils';
import ElementPlus from 'element-plus';
import JournalView from '@/features/journal/JournalView.vue';

vi.mock('@/composables/journal/use-game-list', () => ({
  default: vi.fn().mockReturnValue({ loading: true, games: [] }),
}));

describe('JournalView', () => {
  test('should mount component', async () => {
    expect(JournalView).toBeTruthy();

    const wrapper = mount(JournalView, {
      global: {
        plugins: [ElementPlus],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
