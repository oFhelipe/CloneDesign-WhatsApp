import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    newImage:{
        height:56,
        width:56,
        borderRadius:32,
        marginRight:16,
    },
    plusVerdeContainer:{
        position:'absolute',
        backgroundColor:'#FFF',
        borderRadius:56,
        bottom:0,
        right:20
    },
    newStatusContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:8
    },
    NewTextContainer:{
        flex:1
    },
    newTitle:{
        fontFamily:'Roboto_500Medium',
        fontSize:17
    },
    newSubTitle:{
        fontSize:13,
        color:'#727272'
    },
    atualizacoesBox:{
        width:Dimensions.get('window').width,
        padding:8,
        backgroundColor:'#F4F4F4'
    },
    atualizacoesText:{
        fontFamily:'Roboto_500Medium',
        fontSize:14,
        color:'#6E6E6E'
    }
});

export default styles;