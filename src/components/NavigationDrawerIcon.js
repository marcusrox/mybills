import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function NavigationDrowerIcon(props) {
    return (
        <View style={{ paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Ionicon name="ios-menu" size={30} color="#4F8EF7" />
            </TouchableOpacity>
        </View>
    );
}