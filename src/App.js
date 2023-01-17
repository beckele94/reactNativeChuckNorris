import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react';
import HomeScreen from "./screens/Home";
import ChuckScreen from "./screens/Chuck";
import {View} from "react-native";

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chuck" component={ChuckScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;