import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ route, navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicon name="ios-person" size={30} color="#4F8EF7" />
            <Text>Aqui é a tela de about da nossa aplicação.</Text>

            <Button
                title="Ir para AlgumaRota"
                onPress={() => navigation.navigate('AlgumaRota', { billId: Math.floor(Math.random() * 100) })}
            />

            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

        </View>
    );
}