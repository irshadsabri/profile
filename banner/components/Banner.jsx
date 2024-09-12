import { View, Text, Image } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View className="flex justify-start items-center mt-4">
      <View className="bg-slate-100 w-[95%] h-48 border border-slate-300 rounded-lg shadow-xl">
        <Image
          source={require("../assets/Images/banner.jpg")}
          className="w-full h-full rounded-lg"
        />
      </View>
    </View>
  );
};

export default Banner;
