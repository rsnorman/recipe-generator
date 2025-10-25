import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, TYPOGRAPHY } from "@/app/constants/theme";

export default function AddRecipeScreen(): React.JSX.Element {
  return (
    <View style={styles.container} testID="add-recipe-container">
      <Ionicons
        name="camera-outline"
        size={80}
        color={COLORS.textTertiary}
        testID="add-recipe-icon"
      />
      <Text style={styles.title}>Add Recipe</Text>
      <Text style={styles.subtitle}>Coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
  },
  title: {
    fontSize: TYPOGRAPHY.sizes.xxl,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text,
    marginTop: SPACING.lg,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
});
