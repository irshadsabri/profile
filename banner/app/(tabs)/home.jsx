import { View, ScrollView } from "react-native";
import React from "react";
import Banner from "../../components/Banner";
import Category from "../../components/Category";

const home = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <Category />
      </ScrollView>
    </>
  );
};

export default home;
