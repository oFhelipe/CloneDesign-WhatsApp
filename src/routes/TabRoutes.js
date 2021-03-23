import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Conversas from '../screens/Conversas'
import Status from '../screens/Status'
import Chamadas from '../screens/Chamadas'

const TabRoutes = () => {
    const TopBar = createMaterialTopTabNavigator();
    return (
        <TopBar.Navigator
            tabBarOptions={{
                style:{backgroundColor:'#075E55'},
                activeTintColor:'#FFF',
                inactiveTintColor:'#83b0ad',
                indicatorStyle:{backgroundColor:'#FFF'},
                labelStyle:{fontFamily:"Roboto_700Bold", textTransform:'uppercase'}
            }}>
            <TopBar.Screen name="Conversas" component={Conversas}/>
            <TopBar.Screen name="Status" component={Status}/>
            <TopBar.Screen name="Chamadas" component={Chamadas}/>
        </TopBar.Navigator>
    )
}

export default TabRoutes
