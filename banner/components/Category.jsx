import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Category = () => {
  return (
    <View className="flex flex-row flex-wrap justify-center items-center gap-10 mt-1">
      <TouchableOpacity className="w-[150px] h-[150px] bg-[#10C8C1] shadow-lg shadow-[#000] rounded-xl flex justify-center items-center">
        <Image
          source={require("../assets/Images/charity.png")}
          className="w-[60%] h-[60%] mb-2"
        />
        <Text className="text-xl font-semibold">Donations</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[150px] h-[150px] bg-[#10C8C1] shadow-lg shadow-[#000] rounded-xl flex justify-center items-center">
        <Image
          source={require("../assets/Images/ambu.png")}
          className="w-[60%] h-[60%]"
        />
        <Text className="text-xl font-semibold text-center">
          Ambulance Request
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[150px] h-[150px] bg-[#10C8C1] shadow-lg shadow-[#000] rounded-xl flex justify-center items-center">
        <Image
          source={require("../assets/Images/campaigns.png")}
          className="w-[60%] h-[60%] mb-2"
        />
        <Text className="text-xl font-semibold">Campaigns</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[150px] h-[150px] bg-[#10C8C1] shadow-lg shadow-[#000] rounded-xl flex justify-center items-center">
        <Image
          source={require("../assets/Images/medicaltest.png")}
          className="w-[60%] h-[60%] mb-4"
        />
        <Text className="text-xl font-semibold text-center">
          Medical Testing
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[150px] h-[150px] bg-[#10C8C1] shadow-lg shadow-[#000] rounded-xl flex justify-center items-center">
        <Image
          source={require("../assets/Images/pharmacy.png")}
          className="w-[60%] h-[60%] "
        />
        <Text className="text-xl font-semibold text-center">
          Pharmacy Service
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[150px] h-[150px] bg-[#10C8C1] shadow-lg shadow-[#000] rounded-xl flex justify-center items-center">
        <Image
          source={require("../assets/Images/home.png")}
          className="w-[60%] h-[60%]"
        />
        <Text className="text-xl font-semibold text-center">
          Home Health Serivce
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
