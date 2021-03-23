import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';


const MensagemVerde = ({data}) => {


    const { mensagem, tempo, chegou, visualizado } = data;

    return (
        <View style={styles.container}>
            <Text style={styles.mensagem}>{mensagem}</Text>
            <Text style={styles.tempo}>{tempo}</Text>
            {chegou ? <MaterialCommunityIcons name="check-all" size={14} color={visualizado ? "#46B0DA" : "#859f72"} />
                    : <MaterialCommunityIcons name="check" size={14} color="#859f72" />}
        </View>
    )
}

export default MensagemVerde
