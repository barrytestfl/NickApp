import react, { useState, useContext } from "react";
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
import { Context as AuthContext } from "../../context/AuthContext";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/SignInPic5.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.title}>WelCome Back </Text>
            <Text style={styles.subTitle}>SignIn to Contincu</Text>
          </View>
          <View style={styles.dataContainer}>
            <TextInput
              placeholder="User Name"
              placeholderTextColor={COLORS.white}
              style={styles.textInput}
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              placeholder="PassWord"
              placeholderTextColor={COLORS.white}
              style={styles.textInput}
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                signin({ email, password });
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

export default LoginScreen;
