import { FlatList, StyleSheet } from 'react-native';
import ErrorView from '../components/ErrorView';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { SPACING } from '../config/theme';
import useProducts from '../hooks/useProducts';

export default function ProductsScreen() {
  const { products, loading, refreshing, error, refresh, retry } = useProducts();

  if (loading) return <Loader />;
  if (error && products.length === 0) return <ErrorView message={error} onRetry={retry} />;

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ProductCard product={item} />}
      refreshing={refreshing}
      onRefresh={refresh}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: SPACING.md,
    maxWidth: 640,
    width: '100%',
    alignSelf: 'center',
  },
});
