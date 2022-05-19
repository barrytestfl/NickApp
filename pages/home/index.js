import react, { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
const Home = () => {
  const { state } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignContent: "center" }}>
        <Text>Home {state.email}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Home;
