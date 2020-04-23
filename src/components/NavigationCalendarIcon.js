import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function NavigationCalendarIcon(props) {
    return (
        <View style={{ paddingRight: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Ionicon name="md-calendar" size={30} color="#4F8EF7" />
            </TouchableOpacity>
        </View>
    );
}