import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons';


import styles from './styles'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>WhatsApp</Text>
            <View style={styles.iconsContainer}>
                <MaterialIcons name="search" size={28} color="#FFF"/>
                <Entypo  style={styles.dots} name="dots-three-vertical" size={16} color="#FFF" />
            </View>
        </View>
    )
}

export default Header
