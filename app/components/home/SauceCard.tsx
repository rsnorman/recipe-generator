import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import type { Sauce } from "@/app/types/sauce";
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS, SHADOWS } from "@/app/constants/theme";

interface SauceCardProps {
  sauce: Sauce;
  onPress: (sauce: Sauce) => void;
}

export default function SauceCard({ sauce, onPress }: SauceCardProps): React.JSX.Element {
  const handlePress = (): void => {
    onPress(sauce);
  };

  const renderHeatLevel = (): React.JSX.Element[] => {
    return Array.from({ length: sauce.heatLevel }, (_, index) => (
      <Ionicons
        key={index}
        name="flame"
        size={16}
        color={COLORS.heat[sauce.heatLevel]}
        testID={`flame-heat-${index}`}
      />
    ));
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      accessibilityLabel={`${sauce.name}, heat level ${sauce.heatLevel} out of 5`}
      accessibilityRole="button"
      testID="sauce-card"
    >
      <Image
        source={{ uri: sauce.imageUrl }}
        style={styles.image}
        contentFit="cover"
        transition={200}
        testID="sauce-image"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {sauce.name}
        </Text>
        <View style={styles.heatContainer}>{renderHeatLevel()}</View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    overflow: "hidden",
    ...SHADOWS.sm,
  },
  cardPressed: {
    opacity: 0.8,
  },
  image: {
    width: "100%",
    height: 120,
    backgroundColor: COLORS.surfaceSecondary,
  },
  infoContainer: {
    padding: SPACING.sm,
    gap: SPACING.xs,
  },
  name: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: TYPOGRAPHY.weights.semibold,
    color: COLORS.text,
    lineHeight: TYPOGRAPHY.sizes.sm * TYPOGRAPHY.lineHeights.tight,
  },
  heatContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
});
