import { StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles=StyleSheet.create({
    container:{paddingHorizontal:20,paddingTop:20},
    title:{
        fontWeight:"bold",
        color:COLORS.black,
        fontSize:SIZE.h1
    },
    subTitle:{
        fontWeight:"bold",
        color:COLORS.black,
        fontSize:SIZE.h4
    },
    textInput:{
        borderBottomColor:COLORS.lightGray,
        borderBottomWidth:1,
        fontSize:SIZE.h4,
        paddingVertical:10,
        marginVertical:30,
        color:COLORS.black
    },
    button:{
        backgroundColor:COLORS.primary,
        padding:20,
        borderRadius:12,
        marginHorizontal:20,
        marginTop:55,
        alignItems:"center"
    },
    textButton:{textAlign:"center",fontSize:SIZE.h4,fontWeight:"bold",color:COLORS.white}
});

export default styles;