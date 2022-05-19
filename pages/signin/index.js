import react from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants/theme";
import styles from "./styles";
const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/SignInPic3.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Register </Text>
            <Text style={styles.subTitle}>SignIn to Contincu</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="User Name"
              placeholderTextColor={COLORS.white}
              style={styles.textInput}
            />
            <TextInput
              placeholder="PassWord"
              placeholderTextColor={COLORS.white}
              style={styles.textInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MainTabs");
              }}
            >
              <View style={styles.button1}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResetPass");
              }}
            >
              <Text style={styles.text}>Forget Password? |Click Here</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default SignInScreen;
