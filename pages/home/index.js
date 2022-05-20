import react, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { Icon } from "react-native-elements";
import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBox}>
        <Text style={styles.mainText}>Wellcome {state.email}</Text>
      </View>
      <View>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-start",
            alignContent: "flex-start",
            backgroundColor: "blue",
            opacity: 0.8,
            borderRadius: 20,
            width: 180,
            height: 200,
            padding: 4,
          }}
        >
          <View>
            <Text style={{ margin: 10, fontSize: 16, color: "#ccc" }}>
              Haert Rate
            </Text>
            <View
              style={{
                padding: 3,
                borderRadius: 50,
                width: 55,
                height: 55,
                top: -45,
                left: "60%",
                alignItems: "center",
              }}
            >
              <Icon
                type="font-awesome"
                raised
                name="heartbeat"
                size={20}
                color="blue"
              />
            </View>
            <View style={{}}>
              <Text
                style={{ fontSize: 22, fontWeight: "900", color: "#FFFFFF" }}
              >
                Sales Total
              </Text>
            </View>
            <View style={{ alignContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, color: "#FFFFcc" }}>
                120,500.00 ريال
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
