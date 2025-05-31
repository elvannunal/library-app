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
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const homeBackgroundImage = require('../../assets/homePage.png');

const HomeScreen = () => {

    type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <SafeAreaProvider>
            <ImageBackground
                source={homeBackgroundImage}
                style={styles.background}
                blurRadius={3}>
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity
                        style={styles.allBooksPage}
                        onPress={() => navigation.navigate('AllBooks')}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.allBookText}>Tüm Kitaplar</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    allBooksPage: {
        width: 230,
        height: 50,
        backgroundColor: '#333',
        borderRadius:90,
    }, 
    allBookText:{
        textAlign:'center',
        fontSize: 23,
        color: '#ffff',
        paddingTop:10
   }
})
export default HomeScreen