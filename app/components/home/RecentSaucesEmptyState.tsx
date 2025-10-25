import { COLORS, SPACING, TYPOGRAPHY } from "@/app/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecentSaucesEmptyState(): React.JSX.Element {
  return (
    <View
      style={styles.container}
      accessibilityLabel="No sauces scanned yet. Take a photo to get started."
      testID="empty-state"
    >
      <Text style={styles.message}>Your recent sauces will appear here</Text>
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
