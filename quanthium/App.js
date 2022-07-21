import React from "react";
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";

import confirmationScreen from "./src/screens/ConfirmationScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LendScreen from "./src/screens/LendScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RequestScreen from "./src/screens/RequestScreen";
import SigninScreen from "./src/screens/SigninScreen";
import { Provider as AuthProvider } from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {Ionicons} from "@expo/vector-icons";

const switchNavigator = createSwitchNavigator({
    // three main flows
    loginFlow: SigninScreen,
    mainFlow: createBottomTabNavigator({
        Profile: ProfileScreen,
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
        lendReqFlow: createStackNavigator({
            Lend: LendScreen,
            Req: RequestScreen
        }),
    },
    {
        initialRouteName: "homeFlow"
    }),
    transactionFlow: confirmationScreen
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={ (navigator) => { setNavigator(navigator) }}/>
        </AuthProvider>
    );
}

