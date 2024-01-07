import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../theme/index";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants";

export default function AddExpenseScreen() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const navigation = useNavigation();
  const handleAddExpense = () => {
    if (title && amount && category) {
      navigation.goBack();
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
            Add Expense
          </Text>
        </View>
        <View className="flex-row justify-center my-3 mt-5">
          <Image
            className="h-72 w-72"
            source={require("../assets/images/expenseBanner.png")}
          />
        </View>
        <View className="mx-3">
          <Text className={`${colors.heading} text-lg font-bold`}>
            For What?
          </Text>
          <TextInput
            value={title}
            onChangeText={(value) => setTitle(value)}
            className="rounded-full p-3 mb-2 mt-2 bg-white"
          />
          <Text className={`${colors.heading} text-lg font-bold`}>
            How Much?
          </Text>
          <TextInput
            value={amount}
            onChangeText={(value) => setAmount(value)}
            className="rounded-full p-3 mb-2 mt-2 bg-white"
          />
        </View>
        <View className="mx-2 space-x-2">
          <Text className={`${colors.heading} text-lg font-bold`}>
            Category
          </Text>
          <View className='flex-row flex-wrap items-center'>
            {
              categories.map((cat)=>{
                let bgColor = 'bg-white'
                if (cat.value == category)
                  { bgColor = 'bg-yellow-200'}
                return (
                  <TouchableOpacity
                    key={category.value}
                    className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-3`}
                    onPress={() => setCategory(cat.value)}
                  >
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleAddExpense}
          style={{ backgroundColor: colors.button }}
          className="my-4 rounded-full p-3 shadow-lg mx-3"
        >
          <Text className="text-center text-white text-lg font-bold">
            Add Expense
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
