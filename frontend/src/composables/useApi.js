import { ref } from 'vue';

const BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000/api';

export function useApi() {
  const loading = ref(false);
  const error = ref(null);

  const request = async (path, options = {}) => {
    loading.value = true; error.value = null;
    try {
      const res = await fetch(`${BASE}${path}`, {
        headers: { 'Content-Type': 'application/json' },
        ...options
      });
      if (!res.ok) {
        let msg = 'Error';
        try { const body = await res.json(); msg = body.message || msg; } catch {}
        throw new Error(msg);
      }
      return await res.json();
    } catch (e) {
      error.value = e.message;
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return { loading, error, request };
}
