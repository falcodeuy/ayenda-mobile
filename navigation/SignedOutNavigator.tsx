import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

const SignedOutNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={screenOptions}
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignedOutNavigator