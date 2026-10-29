import { useCallback, useEffect, useState } from 'react';
import { ENDPOINTS } from '../config/api';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);

      const res = await fetch(ENDPOINTS.products);
      if (!res.ok) {
        throw new Error(`Error ${res.status}: No se pudieron cargar los productos`);
      }
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      setError(e.message || 'Error al conectar con la API de productos');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const refresh = () => fetchProducts(true);
  const retry = () => fetchProducts(false);

  return {
    products,
    loading,
    refreshing,
    error,
    refresh,
    retry,
  };
}
