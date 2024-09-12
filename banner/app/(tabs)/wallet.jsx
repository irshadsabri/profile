import { View, Text, Image } from "react-native";
import React from "react";
import Options from "../../components/Options";
import BottomOption from "../../components/BottomOption";

const Wallet = () => {
  return (
    <View>
      {/*  */}
        <View className='flex-row gap-3 justify-around items-center p-4 m-5'>
            <View className='flex items-center'>
                <Text className='text-[25px] font-bold'>Current Balance</Text>
                <Text className='text-[25px] font-bold'>Rs:999</Text>

            </View>

            <View>
                {/* Image */}
                <Image 
                className='h-[120px] w-[120px] rounded-[200px]'
        source={require("../../assets/Images/Artboard1.png")} // Ensure the file path is correct
      />
            </View>
        </View>
        {/*  */}
        <Options/>
        {/*  */}

        <BottomOption/>

    </View>

  );
};

export default Wallet;
