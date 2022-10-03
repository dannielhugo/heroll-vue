import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

export default function useGameSearch() {
  const query = ref('');
  const searchStore = useSearchStore();
  const { results, loading } = storeToRefs(searchStore);

  const reset = () => {
    query.value = '';
    searchStore.clear();
  };

  const search = async (q: string) => {
    query.value = q;
    await searchStore.search(q);
  };

  return {
    reset,
    search,
    query,
    results,
    loading,
  };
}
