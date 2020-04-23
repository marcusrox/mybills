
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import NavigationDrawerIcon from './NavigationDrawerIcon'

import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator();

export default function SettingsStack({ route, navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SettingsScreen" component={SettingsScreen}
                options={{
                    headerLeft: () => (
                        <NavigationDrawerIcon navigation={navigation} />
                    )
                }}
            />
        </Stack.Navigator>
    );
}