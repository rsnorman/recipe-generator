/**
 * Theme constants for HotSauce AI app
 * Provides consistent colors, spacing, and typography across the application
 */

export const COLORS = {
  // Primary brand colors (warm orange/red palette)
  primary: "#C85A3E", // Burnt orange
  primaryDark: "#A14529", // Dark orange
  primaryLight: "#E89580", // Light peachy orange

  // Accent colors
  accent: "#F4A261", // Light orange accent
  accentDark: "#E76F51", // Red-orange accent

  // Neutrals
  background: "#FAF4F0", // Warm off-white
  surface: "#FFFFFF", // Pure white for cards
  surfaceSecondary: "#F5E6DC", // Light beige for secondary surfaces

  // Text colors
  text: "#2B1E16", // Dark brown (almost black)
  textSecondary: "#6B5A50", // Medium brown
  textTertiary: "#A89689", // Light brown/gray

  // Status colors
  success: "#52A675",
  warning: "#F4A261",
  error: "#E76F51",

  // Heat level colors (for flame icons)
  heat: {
    1: "#F4A261", // Mild - light orange
    2: "#E76F51", // Medium - red-orange
    3: "#C85A3E", // Medium-hot - burnt orange
    4: "#A14529", // Hot - dark orange
    5: "#7D2E1D", // Extra hot - very dark red-brown
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const TYPOGRAPHY = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 40,
  },
  weights: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999, // Fully rounded
} as const;

export const SHADOWS = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

// Minimum touch target size for accessibility (iOS HIG and Material Design)
export const MIN_TOUCH_TARGET = 44;
