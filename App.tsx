import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddBookScreen from '../library-app/src/screens/AddBookScreen';
import BooksDetailScreen from '../library-app/src/screens/BookDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllBooksScreen from './src/screens/AllBooksScreen';
import FavoriteBooksScreen from './src/screens/FavoriteBooksScreen';
import HomeScreen from './src/screens/HomeScreen';
import TabNavigator from './src/screens/TabNavigator';

export type RootStackParamList = {
  Tabs:undefined,
  HomeScreen: undefined;
  AllBooks: undefined;
  BookDetail: { bookId: string };
  AddBook: undefined;
  FavoriteBooks: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="BookDetail" component={BooksDetailScreen}  options={{ headerShown: false }}></Stack.Screen>

        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="AllBooks" component={AllBooksScreen} ></Stack.Screen>
        <Stack.Screen name="AddBook" component={AddBookScreen}  options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="FavoriteBooks" component={FavoriteBooksScreen}  options={{ headerShown: false }}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
