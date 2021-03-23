import React from 'react'
import { View, Text, Image } from 'react-native'
import { BaseButton, RectButton } from 'react-native-gesture-handler'

import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const ChamadaBasicBox = () => {

    const navigation = useNavigation();

    return (
            <BaseButton
                onPress={()=>{navigation.navigate('Chat')}} 
                style={styles.container}>
                 <Image style={styles.perfilImage} source={require('../../assets/images/perfil.jpg')}/>
                <View style={styles.toHorizontal}>
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.nomePerfil}>Fhelipe</Text>
                        <View style={styles.infoContainer}>
                            <MaterialCommunityIcons name="arrow-top-right" size={16} color="#15c771" />
                            <Text style={styles.desc}>Ontem 22:05</Text>
                        </View>
                    </View>
               

                    <View style={styles.tipoChamadaContainer}>
                        {true ? <FontAwesome name="phone" size={24} color="#01887A" /> 
                              : <Ionicons name="ios-videocam" size={24} color="#01887A"/>}
                    </View>
                </View>
            </BaseButton>
    )
}

export default ChamadaBasicBox
