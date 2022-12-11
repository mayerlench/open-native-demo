import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AppDrawerContext } from '../context/appDrawerContext';

import { MainStackParamList } from "../NavigationParamList";

type ScreenTwoProps = {
    route: RouteProp<MainStackParamList, "Two">,
    navigation: FrameNavigationProp<MainStackParamList, "Two">,
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
    const { showDrawer } = React.useContext(AppDrawerContext)
   
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.text}>
                You're viewing screen two!
            </label>
            <button
                style={styles.button}
                onTap={showDrawer}
            >
                Open Drawer
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.goBack()}
            >
                Go back
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "yellow",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});
