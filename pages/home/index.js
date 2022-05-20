import react, { useContext } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 120,
          backgroundColor: "#00cba9",

          width: Dimensions.get("screen").width,
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 22,
            top: 15,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Wellcome {state.email}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          justifyContent: "flex-start",
          borderRadius: 20,
          width: 180,
          height: 200,
          padding: 8,
        }}
      >
        <View>
          <Text style={{ margin: 10 }}>Haert Rate</Text>
          <View
            style={{
              backgroundColor: "#00cba9",
              padding: 5,
              borderRadius: 50,
              width: 60,
              height: 60,
              top: -40,
              left: 110,
              alignItems: "flex-end",
            }}
          >
            <Image
              source={require("../../assets/images/SignInPic5.jpg")}
              style={{
                width: 60,
                height: 60,
                alignContent: "center",
                alignItems: "center",
              }}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
