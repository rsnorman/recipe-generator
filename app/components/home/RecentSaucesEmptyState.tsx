import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, TYPOGRAPHY } from "@/app/constants/theme";

export default function RecentSaucesEmptyState(): React.JSX.Element {
  return (
    <View
      style={styles.container}
      accessibilityLabel="No sauces scanned yet. Take a photo to get started."
      testID="empty-state"
    >
      <Ionicons name="flask-outline" size={64} color={COLORS.textTertiary} testID="bottle-icon" />
      <Text style={styles.message}>
        Your recent sauces will appear here once you start scanning
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.lg,
  },
  message: {
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginTop: SPACING.md,
    lineHeight: TYPOGRAPHY.sizes.md * TYPOGRAPHY.lineHeights.relaxed,
  },
});
