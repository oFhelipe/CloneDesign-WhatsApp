import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16,
        },
    perfilImage:{
        height:56,
        width:56,
        borderRadius:32,
        marginRight:16,
    },
    toHorizontal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderStyle:"solid",
        borderBottomColor:'#e8e8e8',
        flex:1,
        height:'100%',
    },
    nomePerfil:{
        fontFamily:'Roboto_500Medium',
        fontSize:17
    },
    desc:{
        fontSize:13,
        color:'#727272',
        marginLeft:4
    },
    tipoChamadaContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    greenCircle:{
        height:20,
        width:20,
        backgroundColor:'#0BD160',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    numeroMensagens:{
        color:'#FFF',
        fontFamily:'Roboto_500Medium',
        fontSize:12,
    },
    dataText:{
        color:'#0BD160',
        marginBottom:4,
    },
    infoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default styles;