import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import NavigationDrawerIcon from './NavigationDrawerIcon'

import TemplateBillsScreen from '../screens/TemplateBillsScreen'

const Stack = createStackNavigator();

export default function TemplateBillsStack({ route, navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TemplateBillsScreen" component={TemplateBillsScreen}
                options={{
                    headerLeft: () => (
                        <NavigationDrawerIcon navigation={navigation} />
                    )
                }}
            />
        </Stack.Navigator>
    );
}