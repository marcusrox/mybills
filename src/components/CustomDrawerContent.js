import React from 'react';
import {
    BackHandler,
    Image,
    View,
    Text,
    Alert,
} from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Firebase from '../../Firebase'

export default function CustomDrawerContent(props) {
    //console.log(props)

    function exitPressed() {
        Alert.alert(
            'Sair do aplicativo',
            'Deseja realmente sair do aplicativo?',
            [
                { text: 'Não', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Sim', onPress: () => exitConfirmed() },
            ],
            { cancelable: false });
        return true;
    }

    function exitConfirmed() {
        Firebase.auth().signOut().then(() => {
            BackHandler.exitApp()
        })
    }

    return (
        <DrawerContentScrollView {...props} style={{ paddingTop: 0 }}>
            <View style={{ width: '100%', height: 210, backgroundColor: '#448FF2', padding: 10, alignItems: 'center' }}>
                <Image style={{ width: 150, height: 150, resizeMode: 'stretch' }} source={require('../assets/avatar_redondo.png')} />
                <Text style={{ fontFamily: 'Roboto', fontSize: 18, color: '#FFF' }}>
                    {Firebase.auth().currentUser ? Firebase.auth().currentUser.displayName : ''}
                </Text>
                <Text style={{ fontFamily: 'Roboto', fontSize: 16, color: '#FFF' }}>
                    {Firebase.auth().currentUser ? Firebase.auth().currentUser.email : ''}
                </Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Sair"
                onPress={() => exitPressed()}
            />
        </DrawerContentScrollView>
    );
}