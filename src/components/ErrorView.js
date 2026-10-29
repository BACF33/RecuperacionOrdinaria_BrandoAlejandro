import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { RADIUS, SPACING } from '../config/theme';

export default function ErrorView({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>✕</Text>
      </View>
      <Text style={styles.text}>{message}</Text>
      <Pressable
        onPress={onRetry}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Reintentar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
    backgroundColor: '#FFFFFF',
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  icon: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    color: '#666666',
    textAlign: 'center',
    marginBottom: SPACING.lg,
    fontSize: 14,
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: RADIUS.sm,
    ...(Platform.OS === 'web' ? { cursor: 'pointer' } : {}),
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
