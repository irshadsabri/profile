import { View, Text, Image } from 'react-native'
import React from 'react'

const Options = () => {
  return (
    <View className='flex-row justify-evenly'>
    <View className='items-center'>
    <View className='bg-white p-3 rounded-full'>
<Image
className='h-10 w-10'
source={require('../assets/Images/cash-withdrawal.png')}
/>
</View>
<Text className='font-bold text-lg'>Withdraw</Text>
    </View>
    {/*  */}
    <View className='items-center'>
    <View className='bg-white p-3 rounded-full'>
<Image
className='h-10 w-10'
source={require('../assets/Images/topup(1).png')}
/>
</View>
<Text className='font-bold text-lg'>Top up</Text>
    </View>
    {/*  */}
    <View className='items-center'>
    <View className='bg-white p-3 rounded-full'>
<Image
className='h-10 w-10'
source={require('../assets/Images/donation.png')}
/>
</View>
<Text className='font-bold text-lg'>Donation</Text>
    </View>
</View>
  )
}

export default Options