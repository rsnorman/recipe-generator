import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, TYPOGRAPHY, MIN_TOUCH_TARGET } from "@/app/constants/theme";

interface HeaderProps {
  onProfilePress: () => void;
}

export default function Header({ onProfilePress }: HeaderProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name="flame" size={32} color={COLORS.primary} testID="flame-icon" />
        <Text style={styles.title}>HotSauce AI</Text>
      </View>

      <Pressable
        onPress={onProfilePress}
        style={({ pressed }) => [styles.profileButton, pressed && styles.profileButtonPressed]}
        accessibilityLabel="Open profile"
        accessibilityRole="button"
        testID="profile-button"
      >
        <Ionicons name="person-circle-outline" size={32} color={COLORS.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
  },
  title: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.primary,
  },
  profileButton: {
    width: MIN_TOUCH_TARGET,
    height: MIN_TOUCH_TARGET,
    justifyContent: "center",
    alignItems: "center",
  },
  profileButtonPressed: {
    opacity: 0.6,
  },
});
