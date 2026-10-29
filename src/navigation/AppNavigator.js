import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderNav from '../components/HeaderNav';
import { COLORS } from '../config/theme';
import ProductsScreen from '../screens/ProductsScreen';
import StudentScreen from '../screens/StudentScreen';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    primary: COLORS.primary,
    card: COLORS.background,
    text: COLORS.text,
    border: COLORS.border,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 16,
            letterSpacing: 0.2,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <HeaderNav currentRoute={route.name} navigation={navigation} />
          ),
        })}
      >
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ title: 'Estudiante' }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ title: 'Catálogo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
