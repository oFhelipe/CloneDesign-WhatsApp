import React from 'react'
import { View, Text, Image } from 'react-native'
import { BaseButton, RectButton } from 'react-native-gesture-handler'

import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const StatusBasicBox = () => {

    const navigation = useNavigation();

    return (
            <BaseButton
                onPress={()=>{navigation.navigate('Chat')}} 
                style={styles.container}>
                 <Image style={styles.perfilImage} source={require('../../assets/images/perfil.jpg')}/>
                <View style={styles.toHorizontal}>
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.nomePerfil}>Fhelipe</Text>
                        <Text style={styles.desc}>Ontem 12:45</Text>
                    </View>
               
                </View>
            </BaseButton>
    )
}

export default StatusBasicBox
