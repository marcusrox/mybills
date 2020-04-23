import React from 'react';
import {
    View,
    Button, 
    Text,
    StyleSheet
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({ route, navigation }) {
    navigation.setOptions({ title: 'Configurações' })
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicon name="ios-person" size={30} color="#4F8EF7" />
            <Text>Vamos colocar a as configurações gerais do APP</Text>

            <Button
                title="Ir para AlgumaRota"
                onPress={() => navigation.navigate('AlgumaRota', { billId: Math.floor(Math.random() * 100) })}
            />

            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    billList: {
        flex: 9,
        width: '100%'
    },
    summary: {
        flex: 1,
        width: '100%',
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    addButton: {
        position: 'absolute',
        right: 30, bottom: 30,
        width: 60, height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    }
})