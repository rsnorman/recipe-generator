import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Alert, View } from "react-native";
import PhotoCTACard from "@/app/components/home/PhotoCTACard";
import RecentSaucesGrid from "@/app/components/home/RecentSaucesGrid";
import { getRecentSauces } from "@/app/services/mockData";
import type { Sauce } from "@/app/types/sauce";
import { COLORS, SPACING } from "@/app/constants/theme";

export default function HomeScreen(): React.JSX.Element {
  const [sauces, setSauces] = useState<Sauce[]>([]);

  useEffect(() => {
    void loadSauces();
  }, []);

  const loadSauces = async (): Promise<void> => {
    const data = await getRecentSauces();
    setSauces(data);
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: SPACING.xl,
    gap: SPACING.lg,
  },
});
