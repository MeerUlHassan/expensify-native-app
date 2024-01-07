import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons";
import { colors } from '../theme';
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="h-8 w-8 rounded-full bg-white "
    >
      <Entypo name="chevron-left" size={32} color={colors.button} />
    </TouchableOpacity>
  );
}