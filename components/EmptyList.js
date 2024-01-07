import { View, Text, Image } from "react-native";
import React from 'react'

export default function EmptyList({message}) {
  return (
    <View className='p-4 flex-1 justify-center items-center my-5'>
        <Image source={require('../assets/images/empty.png')} className='h-36 w-36 ' />
      <Text className='text-lg font-bold'>{message || 'data not found'}</Text>
    </View>
  )
}