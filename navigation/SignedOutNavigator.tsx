import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
}

const SignedOutNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={screenOptions}
            >
                <Stack.Screen name='LoginScreen' component={Login} />
                {/* <Stack.Screen name='SignupScreen' component={SignupScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignedOutNavigator