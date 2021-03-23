import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Header from '../components/Header'

import TabRoutes from './TabRoutes'
import Chat from '../screens/Chat'

const Routes = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header:Header,
                    headerShown:false,
                    }}>
                <Stack.Screen options={{headerShown:true}} name="TabRoutes" component={TabRoutes}/>
                <Stack.Screen name="Chat" component={Chat}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
