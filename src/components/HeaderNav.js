import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, RADIUS } from '../config/theme';

export default function HeaderNav({ currentRoute, navigation }) {
  const isStudent = currentRoute === 'Student';
  const isProducts = currentRoute === 'Products';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (!isStudent) navigation.navigate('Student');
        }}
        style={({ pressed }) => [
          styles.button,
          isStudent && styles.buttonActive,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.text, isStudent && styles.textActive]}>
          Estudiante
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          if (!isProducts) navigation.navigate('Products');
        }}
        style={({ pressed }) => [
          styles.button,
          isProducts && styles.buttonActive,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.text, isProducts && styles.textActive]}>
          Catálogo
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginRight: Platform.OS === 'web' ? 12 : 4,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: RADIUS.sm,
    backgroundColor: 'transparent',
    ...(Platform.OS === 'web' ? { cursor: 'pointer', transition: '0.15s all ease' } : {}),
  },
  buttonActive: {
    backgroundColor: '#000000',
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    color: '#666666',
    fontSize: 13,
    fontWeight: '600',
  },
  textActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
