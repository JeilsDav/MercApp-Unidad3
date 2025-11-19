import { ref, computed, watchEffect } from 'vue';
import { useApi } from './useApi';

export function useProducts() {
  const { request, loading, error } = useApi();
  const products = ref([]);
  const categories = ref([]);
  const q = ref('');
  const categoryId = ref('');

  const load = async () => {
    categories.value = await request('/categories');
    const params = new URLSearchParams();
    if (q.value) params.set('q', q.value);
    if (categoryId.value) params.set('categoryId', categoryId.value);
    products.value = await request(`/products?${params.toString()}`);
  };

  watchEffect(() => { load(); });

  const visible = computed(() => products.value);
  return { loading, error, products, categories, q, categoryId, visible, reload: load };
}
