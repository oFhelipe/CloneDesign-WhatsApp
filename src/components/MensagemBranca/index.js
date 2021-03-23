import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';


const MensagemBranca = ({data}) => {
    const { mensagem, tempo } = data;
    return (
        <View style={styles.container}>
            <Text style={styles.mensagem}>{mensagem}</Text>
            <Text style={styles.tempo}>{tempo}</Text>
        </View>
    )
}

export default MensagemBranca
