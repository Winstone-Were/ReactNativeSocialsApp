
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../screens/Home";
import Login from "../screens/Login";

const AuthStack = () =>(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen 
                name="LoginScreen"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="HomeScreen"
                component={Home}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

const NavigationProvider = () =>{
    return <AuthStack />
};

export default NavigationProvider;