import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
                setIsAuthenticated(true)
        }, 5000)
    }, [])

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
                {!isAuthenticated && <StackNavigator.Screen
                    name="One"
                    component={ScreenOne}
                />}
                {isAuthenticated && <StackNavigator.Screen
                    name="Two"
                    component={ScreenTwo}
                />}
            </StackNavigator.Navigator>
        </BaseNavigationContainer>

    )
}
