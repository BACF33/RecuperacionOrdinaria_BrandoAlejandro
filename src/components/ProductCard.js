import { useState } from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../config/theme';

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: product.image.medium}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.body}>
        <View style={styles.topRow}>
          <Text style={styles.category}>{product.category?.toUpperCase()}</Text>
          {product.rating && (
            <Text style={styles.rating}>
              Desde {product.premiered}
              Hasta {product.ended}
            </Text>
          )}
        </View>

        <Text style={styles.title} numberOfLines={expanded ? undefined : 2}>
          {product.name}
        </Text>

        <Text style={styles.description} numberOfLines={expanded ? undefined : 2}>
          {product.summary}
        </Text>

        <Pressable
          onPress={() => setExpanded((v) => !v)}
          style={({ pressed }) => [styles.toggleButton, pressed && styles.togglePressed]}
        >
          <Text style={styles.toggleText}>
            {expanded ? 'Menos detalles  ▲' : 'Más detalles  ▼'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginBottom: SPACING.md,
    overflow: 'hidden',
    ...(Platform.OS === 'web'
      ? {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
        }
      : {}),
  },
  imageWrapper: {
    width: '100%',
    height: 190,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  body: {
    padding: SPACING.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  category: {
    color: '#737373',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  rating: {
    color: '#737373',
    fontSize: 11,
    fontWeight: '600',
  },
  title: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 6,
  },
  price: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  description: {
    color: '#666666',
    fontSize: 13,
    lineHeight: 18,
  },
  toggleButton: {
    marginTop: SPACING.sm,
    alignSelf: 'flex-start',
    ...(Platform.OS === 'web' ? { cursor: 'pointer' } : {}),
  },
  togglePressed: {
    opacity: 0.5,
  },
  toggleText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
  },
});
