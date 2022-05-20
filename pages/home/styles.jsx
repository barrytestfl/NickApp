
import { StyleSheet,Dimensions } from "react-native";
import { COLORS, SIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  mainBox:{
    height: 120,
    backgroundColor: "#00cba9",
    flex: 1,
    width: Dimensions.get("screen").width,
    padding:15
  },
  mainText:{
    color: "#000",
    fontSize: 22,
    top: 15,
    textAlign: "center",
    justifyContent: "center",
  },

});

export default styles;
