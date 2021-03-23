import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        height:48,
        width:Dimensions.get('screen').width,
        backgroundColor:'#075E55',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
    },
    logoText:{
        color:'#FFF',
        fontFamily:"Roboto_700Bold",
        fontSize:20
    },
    iconsContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    dots:{
        marginLeft:16,
    }
})

export default styles;