import { View, Text, Image } from 'react-native'
import React from 'react'

const WalletCategory = () => {
  return (
    <View className='items-center border border-[#13cac0] bg-[#e7f9f9]
        rounded-[20px] p-3 m-4'>
        <View className='items-center border border-[#13cac0] bg-white
        rounded-[20px] p-3 px-5'>
    <View className='flex-row justify-between  gap-3 items-center'>
        <View>
            <Image
            className='h-[100px] w-[100px] '
            source={require('../../banner/assets/Images/medicalinformation.png')}/>
        </View>
    <View className='items-center'>
    <Text className='text-[20px] font-bold'>Medical</Text>
    <Text className='text-[20px] font-bold'>Informtaion</Text>    
    </View>    
    </View>
     
    </View>
    <View className='items-center border border-[#13cac0] bg-white
        rounded-[20px] p-3 m-4 px-5'>
    <View className='flex-row justify-between  gap-3 items-center'>
        <View>
            <Image
            className='h-[100px] w-[100px] '
            source={require('../../banner/assets/Images/appointments.png')}/>
        </View>
    <View className='items-center'>
    <Text className='text-[20px] font-bold'>Medical</Text>
    <Text className='text-[20px] font-bold'>Appointment</Text>    
    </View>    
    </View>
     
    </View>
    </View>
  )
}

export default WalletCategory