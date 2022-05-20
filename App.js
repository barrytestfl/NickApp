import react, { useContext } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import appTheme, { COLORS } from "./constants/theme";

import OnBoarding from "./pages/onboarding/index";
import Home from "./pages/home/index";
import Products from "./pages/products/index";
import Orders from "./pages/orders/index";
import Profile from "./pages/profile/index";
import LogIn from "./pages/login/index";
import SignIn from "./pages/signin/index";
import ResetPass from "./pages/forgetpassword/index";

import { Provider as AuthProvider } from "./context/AuthContext.js";
import { Context as AuthContext } from "./context/AuthContext";

const AuthStack = createNativeStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="OnBoarding"
        component={OnBoarding}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="LogIn"
        component={LogIn}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen name="ResetPass" component={ResetPass} />
    </AuthStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function HomeFlow() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "ios-checkbox" : "ios-checkbox-outline";
              break;
            case "Products":
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
              break;
            case "Orders":
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;
            case "Profile":
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;
            default:
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              type="ionicon"
              size={size + 5}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarOptions: {
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Profile" component={Profile} options={{ ta }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const theme = {
  ...appTheme,
  colors: {
    ...appTheme.COLORS,
    border: "transparent",
  },
  dark: true,
};
const App = () => {
  const { state } = useContext(AuthContext);
  console.log(state);
  StatusBar.setBarStyle("light-content", true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token === null ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={AuthFlow}
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeFlow"
            component={HomeFlow}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
