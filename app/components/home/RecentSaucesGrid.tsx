import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import type { Sauce } from "@/app/types/sauce";
import SauceCard from "./SauceCard";
import RecentSaucesEmptyState from "./RecentSaucesEmptyState";
import { COLORS, SPACING, TYPOGRAPHY } from "@/app/constants/theme";

interface RecentSaucesGridProps {
  sauces: Sauce[];
  onSaucePress: (sauce: Sauce) => void;
}

export default function RecentSaucesGrid({
  sauces,
  onSaucePress,
}: RecentSaucesGridProps): React.JSX.Element {
  const renderSauceCard = ({ item }: { item: Sauce }): React.JSX.Element => (
    <View style={styles.cardWrapper}>
      <SauceCard sauce={item} onPress={onSaucePress} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Recent Sauces</Text>

      {sauces.length === 0 ? (
        <RecentSaucesEmptyState />
      ) : (
        <FlatList
          data={sauces}
          renderItem={renderSauceCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.gridContent}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
  },
  sectionHeader: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  gridContent: {
    gap: SPACING.md,
  },
  cardWrapper: {
    flex: 1,
    margin: SPACING.xs,
  },
});
