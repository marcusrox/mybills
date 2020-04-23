import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator 
} from 'react-native';
import Firebase from '../../Firebase';

//const dbRef = Firebase.firestore().collection('bills');
const iniBill = {
    name: '',
    day: '',
    month: '',
    paid: '',
};  

export default function AddBillsScreen({ route, navigation }) {
    const [bill, setBill] = useState(iniBill);
    const [isLoading, setIsLoading] = useState(false);

    navigation.setOptions({ title: 'Adicionar uma conta no mês' })

    function storeBill() {
        if (bill.name === '') {
            alert('Informe pelo menos o nome!')
        } else {
            setIsLoading(true);
            // dbRef.add({
            //     name: bill.name,
            //     email: bill.day,
            //     mobile: bill.month,
            //     paid: bill.paid,
            // }).then((res) => {
            //     setBill(iniBill);
            //     navigation.navigate('BillsScreen')
            // }).catch((err) => {
            //     console.error("Error found: ", err);
            //     setIsLoading(false);
            // });
        }        

        // state.billList.push({
        //     id: Math.random(),
        //     title: 'Nova conta',
        //     color: 'red'
        // })
        
        //setState(state)
        //setState(state => ({ ...state, billList: state.billList }));

        console.log('chamou')
    }
   
    function handleChange(val, field) {
        console.log(val)
        console.log(field)
        // const value = evt.target.value;
         setBill({
             ...bill,
             [field]: val
         });
    }    

    if (isLoading) {
        return (
            <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E" />
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder={'Name'}
                    value={bill.name}
                    onChangeText={(val) => handleChange(val, 'name')}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder={'Day'}
                    value={bill.day}
                    onChangeText={(val) => handleChange(val, 'day')}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder={'Month'}
                    value={bill.month}
                    onChangeText={(val) => handleChange(val, 'month')}
                />
            </View>            
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder={'R$ Paid'}
                    value={bill.paid}
                    onChangeText={(val) => handleChange(val, 'paid')}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Add Bill'
                    onPress={() => storeBill()}
                    color="#19AC52"
                />
            </View>
        </ScrollView>
    );    

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    }
})