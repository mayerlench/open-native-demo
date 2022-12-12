import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import useAuth from '../hooks/useAuth';

import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => {

    const auth = useAuth()
    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName="Screen One"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "white",
                    },
                    headerShown: true,
                }}
            >
                {!auth.isAuthenticated && <StackNavigator.Screen
                    name="One"
                    component={ScreenOne}
                />}
                {auth.isAuthenticated && <StackNavigator.Screen
                    name="Two"
                    component={ScreenTwo}
                />}
            </StackNavigator.Navigator>
        </BaseNavigationContainer>

    )
}
