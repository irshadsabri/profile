import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileBanner = () => {
    return (
       <View className='items-center border border-[gray] bg-[#f4ebec]
        rounded-[40px] p-2 m-4'>
         <View className='flex-row gap-3 justify-around'>
            <View>
                {/* Image */}
                <Image 
                className='h-[120px] w-[120px] rounded-[200px]'
        source={require("../assets/Images/Profileplaceholder.png")} // Ensure the file path is correct
      />
            </View>
            <View>
                <Text className='text-[25px] font-bold'>JHON DOE</Text>
                <Text className='text-[25px] font-bold'>Age:20</Text>

            </View>
        </View>
        <Text>Member Since: 2024/07/08</Text>
       </View>
    )
}




export default ProfileBanner