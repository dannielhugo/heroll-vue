import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import ElementPlus from 'element-plus';

vi.mock('@/composables/journal/use-game-list', () => ({
  default: vi.fn().mockReturnValue({ loading: true, games: ref([]) }),
}));

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

import JournalView from '@/features/journal/JournalView.vue';

describe('JournalView', () => {
  test('should mount component', async () => {
    expect(JournalView).toBeTruthy();

    const wrapper = mount(JournalView, {
      global: {
        plugins: [
          ElementPlus,
          createTestingPinia({
            initialState: {
              search: {
                results: [],
                loading: false,
              },
            },
          }),
        ],
        stubs: {
          RouterView: true,
          HSearchInput: true,
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
