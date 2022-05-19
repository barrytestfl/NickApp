import react, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import appTheme from "../../constants/theme";

const slider = [
  {
    id: 1,
    title: "Businesman",
    description: "ksrflrf wfwpfpwefw fefwpfefweefw ffep   ",
    image: require("../../assets/images/businessman-come-late-for-office-2357946-2048822.webp"),
  },
  {
    id: 2,
    title: "Businesman",
    description: "ksrflrf wfwpfpwefw fefwpfefweefw ffep   ",
    image: require("../../assets/images/wristwatcht.png"),
  },
];
const Onboarding = ({ navigation }) => {
  const buttomLabel = (label) => {
    return (
      <View style={{ padding: 12 }}>
        <Text
          style={{
            color: appTheme.COLORS.secondary,
            fontSize: appTheme.FONTS.h4.fontSize,
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={slider}
      renderItem={({ item }) => {
        return (
          <View
            key={item.id}
            style={{
              flex: 1,
              alignItems: "center",
              padding: 15,
            }}
          >
            <Image
              source={item.image}
              style={{ width: appTheme.SIZE.width - 80, height: 400 }}
              resizeMode="contain"
            />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        );
      }}
      activeDotStyle={{ backgroundColor: appTheme.COLORS.primary, width: 30 }}
      renderNextButton={() => buttomLabel("Next")}
      renderSkipButton={() => buttomLabel("Skip")}
      renderDoneButton={() => buttomLabel("OK")}
      onDone={() => navigation.navigate("LogIn")}
    />
  );
};
export default Onboarding;
