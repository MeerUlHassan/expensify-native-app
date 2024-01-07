import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { colors } from "../theme/index";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/EmptyList";
import { useNavigation } from "@react-navigation/native";

const items = [
  {
    id: 1,
    place: "Gujrat",
    country: "Pakistan",
  },
  {
    id: 2,
    place: "London Eye",
    country: "England",
  },
  {
    id: 3,
    place: "Washington dc",
    country: "America",
  },
  {
    id: 4,
    place: "New york",
    country: "America",
  },
  {
    id: 5,
    place: "Washington dc",
    country: "America",
  },
  {
    id: 6,
    place: "New york",
    country: "America",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-md`}>
          Expensify
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('welcome')}
        className="p-2 px-3 border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center bg-blue-200 rounded-xl mx-5 mb-4">
        <Image
          source={require("../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-2">
        <View className="flex-row justify-between items-center ">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity className="p-2 px-3 border border-gray-200 rounded-full"
          onPress={()=>navigation.navigate('AddTrip')}
          >
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 430}}>
        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListEmptyComponent={<EmptyList message={"You haven't recorded any Trips yet"} />}
          keyExtractor={item=>item.id}
          columnWrapperStyle={{
            justifyContent: "space-around",
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("TripExpenses", {...item})}
                className="bg-white p-3 rounded-2xl mb-3 shadow-sm"
              >
                <View>
                  <Image source={randomImage()} className="w-36 h-36 mb-3" />
                  <Text className={`${colors.heading} font-bold text-md`}>
                    {item.place}
                  </Text>
                  <Text className={`${colors.heading} font-bold text-xs`}>
                    {item.country}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
}
