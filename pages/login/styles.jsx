import { StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles=StyleSheet.create({
    container:{ flex: 1},
    topContainer:{marginTop:100,
    alignItems:"center"
    },
    title:{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:SIZE.h1*1.5,
    },
    subTitle:{
        color:COLORS.white,
        fontSize:SIZE.h4,
        fontWeight:"800",
        paddingTop:3
    },
    dataContainer:{
        marginTop:50,
        padding:15,
        
    },
    textInput:{
        color:COLORS.white,
        fontSize:SIZE.h3,
        borderBottomColor:COLORS.lightGray,
        borderBottomWidth:1,
        paddingHorizontal:15,
        paddingVertical:15,
      
        marginVertical:5
        
    },
    buttonContainer:{marginTop:50},
    button1:{backgroundColor:COLORS.primary,marginVertical:10,marginHorizontal:30,padding:20,borderRadius:15,justifyContent:"center",alignItems:"center"},
    btnText:{color:COLORS.black,fontWeight:"bold",fontSize:SIZE.h3},
    text:{color:COLORS.white,fontWeight:"bold",fontSize:SIZE.h4,marginTop:10,textAlign:"center"}
});

export default styles;