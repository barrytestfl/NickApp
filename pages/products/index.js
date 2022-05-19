import react from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignContent: "center" }}>
        <Text>Products </Text>
      </View>
    </SafeAreaView>
  );
};
export default Products;
