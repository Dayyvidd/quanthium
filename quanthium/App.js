import React from "react";
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {createBottomTabNavigator} from "react-navigation-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SigninScreen from "./src/screens/SigninScreen";
import { Provider as AuthProvider } from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import SignoutScreen from "./src/screens/SignoutScreen";
import SendMoneyScreen from "./src/screens/TESTSendMoneyScreen";

const switchNavigator = createSwitchNavigator({
    // three main flows
    loginFlow: SigninScreen,
    signoutFlow: SignoutScreen,
    mainFlow: createBottomTabNavigator({
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarOptions: {
                    activeTintColor: '#49357e',
                },
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="ios-person"
                            size={24}
                            color={tabInfo.focused ? '#49357e' : "#8e8e93"}
                        />
                    );
                },
            },
        },
        homeFlow: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarOptions: {
                    activeTintColor: '#49357e',
                },
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons
                            name="md-home"
                            size={24}
                            color={tabInfo.focused ? '#49357e' : "#8e8e93"}
                        />
                    );
                },
            },
        },
        Payments: {
            screen: SendMoneyScreen,
            navigationOptions: {
                tabBarLabel: "Lend | Request",
                tabBarOptions: {
                    activeTintColor: '#49357e',
                },
                tabBarIcon: (tabInfo) => {
                    return (
                        <MaterialCommunityIcons
                            name="account-cash"
                            size={24}
                            color={tabInfo.focused ? '#49357e' : "#8e8e93"}
                        />
                    );
                },
            },
        },
    },
    {
        initialRouteName: "homeFlow",
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={ (navigator) => { setNavigator(navigator) }}/>
        </AuthProvider>
    );
}

