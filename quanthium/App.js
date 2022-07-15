import React from "react";
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";

import confirmationScreen from "./src/screens/ConfirmationScreen";
import FriendScreen from "./src/screens/FriendScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LendScreen from "./src/screens/LendScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RequestScreen from "./src/screens/RequestScreen";
import SigninScreen from "./src/screens/SigninScreen";
import YourPortfolioScreen from "./src/screens/YourPortfolioScreen";


const switchNavigator = createSwitchNavigator({
    // three main flows
    loginFlow: SigninScreen,
    mainFlow: createBottomTabNavigator({
        Profile: ProfileScreen,
        homeFlow: createStackNavigator({
            Home: HomeScreen,
            Portfolio: YourPortfolioScreen,
            Notification: NotificationScreen,
            Friends: FriendScreen
        }),
        lendReqFlow: createStackNavigator({
            Lend: LendScreen,
            Req: RequestScreen
        }),
    }),
    transactionFlow: confirmationScreen
});

export default createAppContainer(switchNavigator);
