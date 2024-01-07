import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { colors } from "../theme/index";
import BackButton from "../components/BackButton";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/EmptyList";
import ExpenseCard from "../components/ExpenseCard";
import { useNavigation } from "@react-navigation/native";

const items = [
  {
    id: 1,
    title: "Ate sandwitch",
    amount: 120,
    category: "food",
  },
  {
    id: 2,
    title: "Bought a jacket",
    amount: 5000,
    category: "shopping",
  },
  {
    id: 3,
    title: "Watched a movie",
    amount: 1800,
    category: "entertainment",
  },
];

export default function TripExpensesScreen(props) {
  const {id, place, country} = props.route.params
  const navigation = useNavigation();
  return (
    <>
      <View className="px-4">
        <View className="relative mt-3">
          <View className="absolute top-2 left-0 z-10">
            <BackButton />
          </View>
          <View>
          <Text className={`${colors.heading} text-xl font-bold text-center`}>
            {place}
          </Text>
          <Text className={`${colors.heading} text-xs text-center`}>
            {country}
          </Text>
          </View>
        </View>
        <View className="flex-row justify-center rounded-xl mb-4">
          <Image
            source={require("../assets/images/5.png")}
            className="w-80 h-80"
          />
        </View>
        <View className="space-y-2">
          <View className="flex-row justify-between items-center ">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              className="p-2 px-3 border border-gray-200 rounded-full"
              onPress={() => navigation.navigate("AddExpense")}
            >
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 430 }}>
          <FlatList
            data={items}
            keyExtractor={items.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyList message={"You haven't recorded any Expenses yet"} />
            }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <ExpenseCard item={item} />;
            }}
          />
        </View>
      </View>
    </>
  );
}
