import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ProfileBanner from "../../components/ProfileBanner";
import WalletCategory from "../../components/WalletCategory";
import { useRouter } from "expo-router";


const Profile = () => {
  const router = useRouter();

  return (
    <>
      <ImageBackground
        className='flex-1 '
        source={require('../../assets/Images/bg.png')}>
        {/* back button */}
        <View className='m-5'>
          <TouchableOpacity className='m-5'>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
         <ProfileBanner />
          <WalletCategory />
          <View className=' items-center'>
            <TouchableOpacity
              
              className="bg-[#b6efec] h-[15vw]  w-[69vw]  flex flex-col items-center border border-[#13cac0] rounded-[10px]"
            >
              <View className="h-[3vw] bg-[#13cac0] w-12 rounded-bl-[35px] rounded-br-[35px] ml-10"></View>
              <Text className="text-2xl font-bold text-[#13cac0]">Next</Text>

              <View className="h-[3vw] bg-[#13cac0] w-12 rounded-tl-[25px] rounded-tr-[25px] mr-10"></View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground></>
  );
};

export default Profile;
