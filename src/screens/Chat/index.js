import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, Dimensions, FlatList } from 'react-native'
import { BaseButton, TextInput } from 'react-native-gesture-handler'

import { Feather, Ionicons, FontAwesome, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';

import styles from './styles'
import MensagemVerde from '../../components/MensagemVerde';
import MensagemBranca from '../../components/MensagemBranca';




const Chat = ({ navigation, route }) => {

    const [mensagem, setMensagem] = useState("");

    const data = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                 <View style={styles.toHorizontal}>
                    <BaseButton onPress={()=>{navigation.goBack()}} style={styles.backButton}>
                        <Feather name="arrow-left" size={24} color="#FFF" />
                        <Image style={styles.perfilImage} source={require('../../assets/images/perfil.jpg')}/>
                    </BaseButton> 

                    <View style={styles.textContainer}>
                        <Text style={styles.nome}>Fhelipe</Text>
                        <Text style={styles.online}>online</Text>
                    </View>  
                 </View>
                
                <View style={styles.iconsContainer}>
                    <Ionicons style={styles.headerIcon} name="ios-videocam" size={24} color="#FFF" />
                    <FontAwesome style={styles.headerIcon} name="phone" size={24} color="#FFF" />
                    <Entypo style={styles.headerIcon} name="dots-three-vertical" size={19} color="#FFF" />
                </View>

            </View>
            <ImageBackground 
                    width={Dimensions.get('window').width} 
                    style={styles.backgroundImage} 
                    source={require('../../assets/images/bc.png')}>
                        
                    <FlatList
                        style={styles.messagesContainer}
                        inverted
                        data={data.reverse()}
                        keyExtractor={(item, index)=>{ return `${index}` }}
                        renderItem={({item})=>{
                            const { enviado } = item;

                            return enviado ? <MensagemVerde data={item} />
                                           : <MensagemBranca data={item} />
                            

                        }}/>

                <View style={styles.inputContainer}>
                    
                    <View style={styles.inputBox}>
                        <Fontisto name="smiley" size={22} color="#a7a7a7" />
                        <TextInput
                            multiline={mensagem === "" ? false : true}
                            placeholder="Digite uma mensagem" 
                            value={mensagem}
                            onChangeText={(text)=>{setMensagem(text)}}
                            style={styles.input}/>
                        <FontAwesome style={styles.inputIcon} name="paperclip" size={22} color="#a7a7a7" />
                        <FontAwesome style={styles.inputIcon} name="camera" size={22} color="#a7a7a7" />
                    </View>
                    <View style={styles.audioBox}>
                            { mensagem === "" ? <Ionicons name="md-mic" size={24} color="#FFF"/> : <MaterialIcons name="send" size={24} color="#FFF" />}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Chat
