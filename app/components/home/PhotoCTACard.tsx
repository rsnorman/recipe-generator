import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS, SHADOWS } from "@/app/constants/theme";

interface PhotoCTACardProps {
  onTakePhotoPress: () => void;
  onUploadPress: () => void;
}

export default function PhotoCTACard({
  onTakePhotoPress,
  onUploadPress,
}: PhotoCTACardProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onTakePhotoPress}
        style={({ pressed }) => [styles.photoCard, pressed && styles.photoCardPressed]}
        accessibilityLabel="Take a photo of hot sauce bottle"
        accessibilityRole="button"
        testID="photo-cta"
      >
        <Ionicons name="camera" size={64} color={COLORS.surface} testID="camera-icon" />
        <Text style={styles.cardTitle}>Take a Photo</Text>
        <Text style={styles.cardSubtitle}>Tap to capture your hot sauce bottle</Text>
      </Pressable>

      <Pressable
        onPress={onUploadPress}
        style={({ pressed }) => [styles.uploadLink, pressed && styles.uploadLinkPressed]}
        accessibilityLabel="Upload from gallery"
        accessibilityRole="button"
        testID="upload-link"
      >
        <Text style={styles.uploadText}>Upload from gallery</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    gap: SPACING.md,
  },
  photoCard: {
    backgroundColor: COLORS.accent,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.xl,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
    ...SHADOWS.md,
  },
  photoCardPressed: {
    opacity: 0.8,
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.sizes.xxl,
    fontWeight: TYPOGRAPHY.weights.bold,
    color: COLORS.surface,
    marginTop: SPACING.md,
  },
  cardSubtitle: {
    fontSize: TYPOGRAPHY.sizes.md,
    color: COLORS.surface,
    marginTop: SPACING.xs,
    opacity: 0.9,
  },
  uploadLink: {
    alignSelf: "center",
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  uploadLinkPressed: {
    opacity: 0.6,
  },
  uploadText: {
    fontSize: TYPOGRAPHY.sizes.md,
    fontWeight: TYPOGRAPHY.weights.semibold,
    color: COLORS.primary,
  },
});
