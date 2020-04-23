import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import NavigationDrawerIcon from './NavigationDrawerIcon'
import NavigationCalendarIcon from './NavigationCalendarIcon'

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack = createStackNavigator();

export default function StartupStack({ route, navigation }) {
    return (
        <Stack.Navigator
            initialRouteName="SignupScreen"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#3740FE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="SignupScreen" 
                component={SignupScreen} 
                options={{ title: 'MyBills - Novo usuário' }}
            />
            <Stack.Screen name="LoginScreen" 
                component={LoginScreen}
                options={{ title: 'MyBills - Login', headerLeft: null }}
            />
            

        </Stack.Navigator>
    );
}