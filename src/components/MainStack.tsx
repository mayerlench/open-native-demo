import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { AppDrawerContextProvider } from '../context/appDrawerContext'

import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();

const AuthenticatedRoutes = () => (
    <AppDrawerContextProvider>
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Two" component={ScreenTwo} />
        </StackNavigator.Navigator>
    </AppDrawerContextProvider>
)

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
                    name="AuthenticatedRoutes"
                    component={AuthenticatedRoutes}
                />}

            </StackNavigator.Navigator>
        </BaseNavigationContainer>

    )
}
