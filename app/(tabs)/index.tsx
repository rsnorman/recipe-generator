import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Alert, View, ActivityIndicator } from "react-native";
import PhotoCTACard from "@/app/components/home/PhotoCTACard";
import RecentSaucesGrid from "@/app/components/home/RecentSaucesGrid";
import { getRecentSauces } from "@/app/services/mockData";
import type { Sauce } from "@/app/types/sauce";
import { COLORS, SPACING } from "@/app/constants/theme";

export default function HomeScreen(): React.JSX.Element {
  const [sauces, setSauces] = useState<Sauce[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    void loadSauces();
  }, []);

  const loadSauces = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await getRecentSauces();
      setSauces(data);
    } finally {
      setLoading(false);
    }
  };

  const handleTakePhoto = (): void => {
    Alert.alert("Camera", "Camera functionality coming soon!");
  };

  const handleUpload = (): void => {
    Alert.alert("Upload", "Gallery upload functionality coming soon!");
  };

  const handleSaucePress = (sauce: Sauce): void => {
    Alert.alert("Sauce Details", `Viewing ${sauce.name}`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} testID="loading-indicator" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <PhotoCTACard onTakePhotoPress={handleTakePhoto} onUploadPress={handleUpload} />
        <RecentSaucesGrid sauces={sauces} onSaucePress={handleSaucePress} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
    gap: SPACING.lg,
  },
});
