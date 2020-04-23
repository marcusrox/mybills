import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default function BillLineItem(props) {
    
    return (
        <View style={{ flexDirection: 'row', width: '100%', padding: 10, borderColor: '#7373', borderBottomWidth: 1 }}>
            <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: props.color }}></View>
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 18 }}>{props.title}</Text>
                <Text style={{ fontSize: 16, color: '#737373' }}>
                    Vencido dia  01 - Valor:  R$ 123,46
                </Text>
            </View>
        </View>
    )
}