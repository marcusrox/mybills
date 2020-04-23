import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import BillLineItem from '../components/BillLineItem';

const intialState = {
    billList: [
        { id: 1, title: 'Vivo - Internet e TV', color: 'red'},
        { id: 2, title: 'Condomínio', color: 'green' },
        { id: 3, title: 'Escola de Liz', color: 'yellow' },
        { id: 4, title: 'Bahiagás', color: 'blue' },
    ],
    countBill: 0
}

export default function BillsScreen({ route, navigation }) {
    const [state, setState] = useState(intialState);

    function addBill() {
        state.billList.push({
            id: Math.random(),
            title: 'Nova conta ' + Math.random(100),
            color: 'red'
        })
        state.countBill++
        //setState(state)
        setState(state => ({ ...state, billList: state.billList }));
        
        console.log('chamou')
    }
    navigation.setOptions({ title: 'Contas de Maio/2020' })
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
            <View style={styles.billList}>
                <FlatList data={state.billList}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <BillLineItem {...item} />} />
            </View>
            <View style={styles.summary}>
                <Text>Sumário: {state.countBill}</Text>
            </View>
            

            <TouchableOpacity 
                style={styles.addButton} 
                activeOpacity={0.7}
                //onPress={() => addBill()}>
                onPress={() => navigation.navigate('AddBillScreen')}>
                <Icon name="plus" size={20} color="#FFF"/>
            </TouchableOpacity>
            
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