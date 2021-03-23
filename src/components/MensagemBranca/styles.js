import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
        container:{
            backgroundColor:'#FFF',
            paddingHorizontal:8,
            paddingVertical:7,
            flexDirection:'row',
            alignItems:'flex-end',
            borderRadius:5,
            alignSelf:'flex-start',
            marginTop:8,
        },
        mensagem:{
            fontFamily:'Roboto_400Regular',
            fontSize:16,
        },
        tempo:{
            color:'#9A9A9A',
            fontSize:12,
            paddingHorizontal:4,
            marginLeft:4,
        }
});

export default styles;