import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require("../assets/images/welcome.gif")}
            className="w-96 h-96"
          />
        </View>
        <View>
          <Text
            className={`${colors.heading} font-bold text-4xl mb-10 text-center`}
          >
            Expensify
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            className="shadow rounded-full p-3 mx-5 mb-5"
            style={{ backgroundColor: colors.button }}
          >
            <Text className="text-center text-white text-xl font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="shadow rounded-full p-3 mx-5"
            style={{ backgroundColor: colors.button }}
          >
            <Text className="text-center text-white text-xl font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}