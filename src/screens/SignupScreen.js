import React, { Component } from 'react';
import { 
    StyleSheet, Text, View, TextInput, Button, 
    Alert, ActivityIndicator, AsyncStorage, Image 
} from 'react-native';
import Firebase from '../../Firebase';


export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false
        }
    }

    componentDidMount = () => {
        AsyncStorage.getItem('login-email')
            .then((value) => {
                if (value) {
                    this.props.navigation.navigate('LoginScreen')
                }
            })

    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Informe as credenciais para registro!')
        } else {
            console.log("Inicio da rotina de registro")
            this.setState({
                isLoading: true,
            })
            console.log("Setei o Loading, vou chamar o Firebase")
            Firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    res.user.updateProfile({
                        displayName: this.state.displayName
                    })
                    console.log('Usuário registrado com sucesso!')
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('LoginScreen')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
            
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <View style={{ backgroundColor: 'red', flex: 1 }}>
                <Image style={styles.imgTop} source={require('../assets/top_login.jpg')} />
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Nome"
                        value={this.state.displayName}
                        onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Senha"
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        maxLength={15}
                        secureTextEntry={true}
                    />
                    <Button
                        color="#3740FE"
                        title="Registrar"
                        onPress={() => this.registerUser()}
                    />

                    <Text
                        style={styles.loginText}
                        onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        Já está registrado? Clique aqui para Login
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgTop: {
        flex: 4,
        alignSelf: "center",
    },    
    container: {
        flex: 6,
        //display: "flex",
        //flexDirection: "column",
        justifyContent: "flex-start",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});