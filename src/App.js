import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import React from 'react'
import HomeScreen from "./screens/Home"
import ChuckScreen from "./screens/Chuck"
import SessionScreen from "./screens/Session"
import SignSessionScreen from "./screens/SignSession"
import SignInScreen from "./screens/SignIn"
import RegisterScreen from "./screens/Register"

function App() {
    let isSignedIn = false
    return (
        isSignedIn ? (
            <>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Chuck" component={ChuckScreen} />
                        <Stack.Screen name="Session" component={SessionScreen} />
                        <Stack.Screen name="Sign" component={SignSessionScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </>
        ) : (
            <>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </>
        )
    )
}

export default App;