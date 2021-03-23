import React from 'react'
import { View, Text, Image } from 'react-native'
import { BaseButton, RectButton } from 'react-native-gesture-handler'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const BasicBox = ({ data }) => {

    

    const { nome, conversas } = data;
    const ultimaConversa = conversas[conversas.length - 1];
    const {enviado, mensagem, tempo, chegou, visualizado } = ultimaConversa;

    const qtdMensagens = conversas.filter((value)=>{
            if(!value.visualizado){
                return true;
            }
    }).length;

    const navigation = useNavigation();

    return (
            <BaseButton
                onPress={()=>{navigation.navigate('Chat', conversas)}} 
                style={styles.container}>
                 <Image style={styles.perfilImage} source={require('../../assets/images/perfil.jpg')}/>
                <View style={styles.toHorizontal}>
                    
                    <View style={styles.textContainer}>
                        <Text style={styles.nomePerfil}>{nome}</Text>
                        <View style={styles.descContainer}>
                            {enviado && <MaterialCommunityIcons style={styles.checkIcon} 
                                                                name={chegou ? "check-all" : "check"} 
                                                                size={14} color={chegou && visualizado ? "#46B0DA" : "#727272"} />}
                            <Text style={styles.desc}>{Array.isArray(conversas) && mensagem}</Text>
                        </View>
                    </View>
               

                    <View style={styles.qtDataContainer}>
                        <Text style={[styles.dataText,{color: enviado || qtdMensagens == 0 ? '#727272' :'#0BD160',}]}>{tempo}</Text>
                       {enviado || qtdMensagens == 0
                                ? <View style={styles.greenCircleSpace} />//banco
                                :  <View style={styles.greenCircle}>
                                        <Text style={styles.numeroMensagens}>{qtdMensagens}</Text>
                                    </View>}
                    </View>
                </View>
            </BaseButton>
    )
}

export default BasicBox
