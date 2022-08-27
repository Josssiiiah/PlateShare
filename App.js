import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View className = "flex-1 items-center justify-center text-[#00FFFF]">
      <Text className= "text-black">np App.js to stap!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
