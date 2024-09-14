import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#feb202", // Active tab color
        tabBarInactiveTintColor: "#000000", // Inactive tab color
      }}
    >
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/Images/Wallet.png")} // Use the correct path for your image
              style={{ width: size, height: size, tintColor: color }} // Applying dynamic color based on the tab state
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/Images/home1.png")} // Use the correct path for your image
              style={{ width: size, height: size, tintColor: color }} // Applying dynamic color based on the tab state
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/Images/user.png")} // Use the correct path for your image
              style={{ width: size, height: size, tintColor: color }} // Applying dynamic color based on the tab state
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
