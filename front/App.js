import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './pages/MainPage';
import { PreferencesProvider } from './context/Preferences';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import { UserProvider } from './context/User';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecipePage from './pages/RecipePage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NewRecipePage from './pages/NewRecipePage';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="iCookie" component={MainPage} />
                <Stack.Screen options={{headerShown: false}} name="new-recipe" component={NewRecipePage} />
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginPage} />
                <Stack.Screen options={{headerShown: false}} name="Cadastro" component={RegisterPage} />
                <Stack.Screen options={{headerShown: false}} name="Pesquisar" component={SearchPage} />
                <Stack.Screen options={{headerShown: false}} name="Favoritos" component={FavoritesPage} />
                <Stack.Screen options={{headerShown: false}} name="Receita" component={RecipePage} />
            </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
