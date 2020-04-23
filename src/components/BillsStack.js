import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import NavigationDrawerIcon from './NavigationDrawerIcon'
import NavigationCalendarIcon from './NavigationCalendarIcon'

import BillsScreen from '../screens/BillsScreen'
import AddBillScreen from '../screens/AddBillScreen'

const Stack = createStackNavigator();

export default function BillsStack({ route, navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BillsScreen" component={BillsScreen}
                options={{
                    headerLeft: () => (
                        <NavigationDrawerIcon navigation={navigation} />
                    ),
                    headerRight: () => (
                        <NavigationCalendarIcon navigation={navigation} />
                    )
                }}
            />
            <Stack.Screen name="AddBillScreen" component={AddBillScreen} />
            
        </Stack.Navigator>
    );
}