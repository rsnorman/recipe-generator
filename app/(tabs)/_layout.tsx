import React from "react";
import { Tabs } from "expo-router";
import { Alert, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/app/constants/theme";
import Header from "@/app/components/home/Header";

export default function TabsLayout(): React.JSX.Element {
  const handleProfilePress = (): void => {
    Alert.alert("Profile", "Profile screen coming soon!");
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => <Header onProfilePress={handleProfilePress} />,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.surfaceSecondary,
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 12,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add-recipe"
        options={{
          title: "Recipes",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: focused ? COLORS.primary : COLORS.accent,
                justifyContent: "center",
                alignItems: "center",
                marginTop: -40,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <Ionicons name="camera" size={32} color={COLORS.surface} />
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
