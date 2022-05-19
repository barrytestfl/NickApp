import react from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forget Pass</Text>
      <Text style={styles.subTitle}>Forget Pass</Text>
      <View>
        <TextInput
          placeholder="Enter Emaile Or Phone Number"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LogIn");
        }}
      >
        <View style={styles.button}>
          <Text style={styles.textButton}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPasswordScreen;
