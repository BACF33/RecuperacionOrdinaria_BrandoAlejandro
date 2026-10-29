import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { STUDENT } from '../config/student';
import { COLORS, RADIUS, SPACING } from '../config/theme';
export default function StudentScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.tag}>ESTUDIANTE</Text>
          <Text style={styles.name}>{STUDENT.nombre}</Text>
          <Text style={styles.label}>Recuperación Ordinaria Módulo 5 – Desarrollo de componentes para dispositivos móviles</Text>
          <View style={styles.divider} />

          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>CARNET</Text>
              <Text style={styles.value}>{STUDENT.carnet}</Text>
            </View>

            <View style={styles.col}>
              <Text style={styles.label}>GRUPO</Text>
              <Text style={styles.value}>{STUDENT.seccionGrupo}</Text>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    padding: SPACING.xl,
    ...(Platform.OS === 'web'
      ? {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
        }
      : {}),
  },
  tag: {
    color: '#737373',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: SPACING.xs,
  },
  name: {
    color: '#000000',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: SPACING.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
  },
  label: {
    color: '#737373',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  value: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '700',
  },
});
