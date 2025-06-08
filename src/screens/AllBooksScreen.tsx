import React from 'react'
import {
    Text,
    StyleSheet,
    ImageBackground,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { DUMMY_BOOKS } from '../../assets/allBooks';

const backgroundImage = require('../../assets/library.jpg');

const AllBooksScreen = () => {

    type AllBooksScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AllBooks'>;

    const navigation = useNavigation<AllBooksScreenNavigationProp>();

    const renderBookItem = ({ item }: { item: { id: string, title: string } }) => {
        return (
            <TouchableOpacity style={styles.bookItem} activeOpacity={0.7}>
                <Text style={styles.bookTitle}>{item.title}</Text>

                <TouchableOpacity
                        style={styles.editBtn}
                        onPress={() => navigation.navigate('BookDetail', { bookId: item.id })}
                        activeOpacity={0.8}>
                       <FontAwesome name="edit" size={22} color="#333" />
                    </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaProvider>
            <ImageBackground
                source={backgroundImage}
                style={styles.background}
                blurRadius={3}>
                <SafeAreaView style={styles.container}>

                    <FlatList
                        data={DUMMY_BOOKS}
                        keyExtractor={item => item.id}
                        renderItem={renderBookItem}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                    />

                    {/* <TouchableOpacity
                        style={styles.addBookBtn}
                        onPress={() => navigation.navigate('AddBook')}
                        activeOpacity={0.8}>
                        <FontAwesome name="plus" size={22} color="#fff" />
                        <Text style={styles.addBookText}>Yeni Kitap Ekle</Text>
                    </TouchableOpacity> */}
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'flex-end',
    },
    listContent: {
        paddingTop: 16,
        paddingBottom: 100, 
    },
    bookItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    // addBookBtn: {
    //     position: 'absolute',
    //     right: 20,
    //     bottom: 30,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     backgroundColor: '#007AFF',
    //     paddingHorizontal: 18,
    //     paddingVertical: 14,
    //     borderRadius: 30,
    //     shadowColor: '#007AFF',
    //     shadowOffset: { width: 0, height: 6 },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 8,
    //     elevation: 6,
    // },
    // addBookText: {
    //     color: '#fff',
    //     fontSize: 17,
    //     marginLeft: 10,
    //     fontWeight: '700',
    // },
    editBtn:{
       position:'absolute',
       right:23
    }
});

export default AllBooksScreen;
