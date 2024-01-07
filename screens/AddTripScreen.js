import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../theme/index";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";

export default function AddTripScreen() {
  const [place, setPlact] = useState("");
  const [country, setCountry] = useState("");

  const navigation = useNavigation();
  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate("Home");
    } else {
      alert("Please enter a valid place and country");
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
            Add Trip
          </Text>
        </View>
        <View className="flex-row justify-center my-3 mt-5">
          <Image
            className="h-72 w-72"
            source={require("../assets/images/6.png")}
          />
        </View>
        <View className="mx-3">
          <Text className={`${colors.heading} text-lg font-bold`}>
            Where On Earth ?
          </Text>
          <TextInput
            value={place}
            onChangeText={(value) => setPlact(value)}
            className="rounded-full p-3 mb-2 mt-2 bg-white"
          />
          <Text className={`${colors.heading} text-lg font-bold`}>
            Which City/Country ?
          </Text>
          <TextInput
            value={country}
            onChangeText={(value) => setCountry(value)}
            className="rounded-full p-3 mb-2 mt-2 bg-white"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleAddTrip}
          style={{ backgroundColor: colors.button }}
          className="my-4 rounded-full p-3 shadow-lg mx-3"
        >
          <Text className="text-center text-white text-lg font-bold">
            Add Trip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
