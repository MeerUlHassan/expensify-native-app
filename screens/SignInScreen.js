import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../theme/index";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const handleSignIn = () => {
    if (email && password) {
      navigation.navigate("Home");
    } else {
      alert("Please enter a valid email and password");
    }
  };
  return (
    <View className="flex-1 justify-between h-full mx-3">
      <View>
        <View className="relative mt-3">
          <View className="absolute top-0 left-0 z-10">
            <BackButton />
          </View>
          <Text className={`${colors.heading} text-xl font-bold text-center`}>
            Sign In
          </Text>
        </View>
        <View className="flex-row justify-center my-3 mt-5">
          <Image
            className="h-80 w-80"
            source={require("../assets/images/login.png")}
          />
        </View>
        <View className="mx-3">
          <Text className={`${colors.heading} text-lg font-bold`}>Email:</Text>
          <TextInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            className="rounded-full p-3 mb-2 mt-2 bg-white"
          />
          <Text className={`${colors.heading} text-lg font-bold`}>
            Password:
          </Text>
          <TextInput
            value={password}
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
            className="rounded-full p-3 mb-2 mt-2 bg-white"
          />
          <View className="flex-row justify-end">
            <TouchableOpacity>
              <Text>Forget Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSignIn}
          style={{ backgroundColor: colors.button }}
          className="my-4 rounded-full p-3 shadow-lg mx-3"
        >
          <Text className="text-center text-white text-lg font-bold">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
