import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import DetailsScreen from "../screens/DetailsScreen";
import FormulaScreen from "../screens/FormulaScreen";
import AlarmScreen from "../screens/AlarmScreen.js";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'home'
                            : 'house';
                    } else if (route.name === 'Formula') {
                        iconName = focused ? 'alpha-f-box' : 'alpha-f-box-outline';
                    }
                    /*else if (route.name === 'Detalhes') {
                        iconName = focused ? 'alpha-f-box' : 'alpha-f-box-outline';
                    }*/
                    else if (route.name === 'Alarmes') {
                        iconName = focused ? 'alarm' : 'alarm-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Criar História" component={CreateStory} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator