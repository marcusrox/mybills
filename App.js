import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CustomDrawerContent from './src/components/CustomDrawerContent'

import BillsStack from './src/components/BillsStack'
import SettingsStack from './src/components/SettingsStack'
import TemplateBillsStack from './src/components/TemplateBillsStack'

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="MenuBills" drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="MenuBills" component={BillsStack} options={{ drawerLabel: 'Contas do Mês' }}/>
                <Drawer.Screen name="MenuTemplateBills" component={TemplateBillsStack} options={{ drawerLabel: 'Modelo de contas mensais' }} />
                <Drawer.Screen name="MenuSettings" component={SettingsStack} options={{ drawerLabel: 'Configurações' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
