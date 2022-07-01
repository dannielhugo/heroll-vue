import useGameList from '@/composables/journal/use-game-list';
import { useCatalogStore } from '@/stores/catalog';
import { useUserStore } from '@/stores/user';
import { createTestingPinia, type TestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';

describe('Use Game List', () => {
  let store: TestingPinia;
  beforeEach(() => {
    store = createTestingPinia({
      initialState: {
        user: {user: {id: '2'}},
        catalog: {
          catalog: {},
          loading: false,
        }
      },
    });
    setActivePinia(store);
  });

  test('should export properties', async () => {
    const props = useGameList();
    
    expect(props).toHaveProperty('loading');
    expect(props).toHaveProperty('games');
    expect(props).toHaveProperty('games');
  });
});