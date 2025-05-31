import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddBookScreen from '../library-app/src/screens/AddBookScreen';
import BooksDetailScreen from '../library-app/src/screens/BookDetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllBooksScreen from './src/screens/AllBooksScreen';
import FavoriteBooksScreen from './src/screens/FavoriteBooksScreen';
import HomeScreen from './src/screens/HomeScreen';

export type RootStackParamList={
  HomeScreen:undefined;
  AllBooks:undefined;
  BookDetail:{bookId:string};
  AddBook:undefined;
  FavoriteBooks:undefined;
}

const Stack=createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="AllBooks" component={AllBooksScreen}></Stack.Screen>
        <Stack.Screen name="BookDetail" component={BooksDetailScreen}></Stack.Screen>
        <Stack.Screen name="AddBook"  component={AddBookScreen}></Stack.Screen>
        <Stack.Screen name="FavoriteBooks" component={FavoriteBooksScreen}></Stack.Screen>
      </Stack.Navigator>
   </NavigationContainer>
  );
}
