import react, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Svg>
          <Path
            fill="#00cba9"
            fillOpacity="0.98"
            d="M0,96L1440,256L1440,0L0,0Z"
          />
        </Svg>
      </View>
      <View style={{ flex: 1, alignContent: "center" }}>
        <Text>Home {state.email}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Home;
