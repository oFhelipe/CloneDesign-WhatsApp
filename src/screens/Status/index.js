import React from 'react'
import { View, Text, Image } from 'react-native'
import StatusBasicBox from '../../components/StatusBasicBox'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';


const Status = () => {
    return (
        <View style={styles.container}>
            <View style={styles.newStatusContainer}>
                <View style={styles.newImageContainer}>
                    <Image style={styles.newImage} source={require('../../assets/images/perfil.jpg')}/>
                    <View style={styles.plusVerdeContainer}>
                        <AntDesign name="pluscircle" size={20} color="#0BD160" />
                    </View>
                </View>
                <View style={styles.NewTextContainer}>
                    <Text style={styles.newTitle}>Meu status</Text>
                    <Text style={styles.newSubTitle}>Toque aqui para atualizar seu status</Text>
                </View>
            </View>
            <View style={styles.atualizacoesBox}>
                <Text style={styles.atualizacoesText}>Atualizações recentes</Text>
            </View>
            <StatusBasicBox />
            <StatusBasicBox />
            <StatusBasicBox />
            <StatusBasicBox />
            
        </View>
    )
}

export default Status
