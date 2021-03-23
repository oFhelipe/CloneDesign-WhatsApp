import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './styles'

import BasicBox from '../../components/BasicBox'

import conversasData from '../../assets/data/Conversas.json'

const Conversas = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <FlatList 
                data={conversasData}
                keyExtractor={(conversa, index)=>{return `${index}`}}
                renderItem={({item:conversa}, index)=>{
                    return (
                        <BasicBox key={index} data={conversa}/>
                    );
                }}
            />
            
        </View>
    )
}

export default Conversas
