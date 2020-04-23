import React, { Component } from 'react';
import { 
    StyleSheet, Text, View, TextInput, Button, Alert, 
    ActivityIndicator, AsyncStorage, Image
} from 'react-native';
import Firebase from '../../Firebase';


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    componentDidMount = () => {
        AsyncStorage.getItem('login-email')
            .then((value) => this.setState({email: value})
        )
        AsyncStorage.getItem('login-password')
            .then((value) => this.setState({ password: value })
        )
    }

    saveLoginCredentials = (email, password) => {
        AsyncStorage.setItem('login-email', email);
        AsyncStorage.setItem('login-password', password);
        //this.setState({ 'name': value });
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    userLogin = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Informe as credenciais para login!')
        } else {
            this.setState({
                isLoading: true,
            })
            Firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    console.log(res)
                    console.log('Usuário autenticado com sucesso!')
                    this.saveLoginCredentials(this.state.email, this.state.password)
                    this.setState({
                        isLoading: false,
                    //    email: '',
                    //    password: ''
                    })
                    this.props.navigation.navigate('MenuBills')
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
            <View style={{backgroundColor: 'red', flex: 1}}>
                <Image style={styles.imgTop} source={require('../assets/top_login.jpg')} />
                <View style={styles.container}>

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
                        title="Entrar"
                        onPress={() => this.userLogin()}
                    />

                    <Text
                        style={styles.loginText}
                        onPress={() => this.props.navigation.navigate('SignupScreen')}>
                        Não tem cadastro? Clique aqui pata registrar
                    </Text>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgTop: {
        flex: 4,
        //resizeMode: 'contain', 
        //height: '5%',
        //justifyContent: "flex-start"
        
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