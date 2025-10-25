import { COLORS, SPACING, TYPOGRAPHY, MIN_TOUCH_TARGET } from "./theme";

describe("Theme Constants", () => {
  describe("COLORS", () => {
    it("should have primary color defined", () => {
      expect(COLORS.primary).toBe("#C85A3E");
    });

    it("should have all heat level colors defined", () => {
      expect(COLORS.heat[1]).toBeDefined();
      expect(COLORS.heat[2]).toBeDefined();
      expect(COLORS.heat[3]).toBeDefined();
      expect(COLORS.heat[4]).toBeDefined();
      expect(COLORS.heat[5]).toBeDefined();
    });

    it("should have distinct heat level colors", () => {
      const heatColors = Object.values(COLORS.heat);
      const uniqueColors = new Set(heatColors);
      expect(uniqueColors.size).toBe(5);
    });
  });

  describe("SPACING", () => {
    it("should have consistent spacing scale", () => {
      expect(SPACING.xs).toBe(4);
      expect(SPACING.sm).toBe(8);
      expect(SPACING.md).toBe(16);
      expect(SPACING.lg).toBe(24);
      expect(SPACING.xl).toBe(32);
      expect(SPACING.xxl).toBe(48);
    });

    it("should have spacing values in ascending order", () => {
      expect(SPACING.xs).toBeLessThan(SPACING.sm);
      expect(SPACING.sm).toBeLessThan(SPACING.md);
      expect(SPACING.md).toBeLessThan(SPACING.lg);
      expect(SPACING.lg).toBeLessThan(SPACING.xl);
      expect(SPACING.xl).toBeLessThan(SPACING.xxl);
    });
  });

  describe("TYPOGRAPHY", () => {
    it("should have font sizes defined", () => {
      expect(TYPOGRAPHY.sizes.xs).toBe(12);
      expect(TYPOGRAPHY.sizes.sm).toBe(14);
      expect(TYPOGRAPHY.sizes.md).toBe(16);
      expect(TYPOGRAPHY.sizes.lg).toBe(20);
    });

    it("should have font weights defined", () => {
      expect(TYPOGRAPHY.weights.regular).toBe("400");
      expect(TYPOGRAPHY.weights.medium).toBe("500");
      expect(TYPOGRAPHY.weights.semibold).toBe("600");
      expect(TYPOGRAPHY.weights.bold).toBe("700");
    });

    it("should have line heights defined", () => {
      expect(TYPOGRAPHY.lineHeights.tight).toBe(1.2);
      expect(TYPOGRAPHY.lineHeights.normal).toBe(1.5);
      expect(TYPOGRAPHY.lineHeights.relaxed).toBe(1.75);
    });
  });

  describe("MIN_TOUCH_TARGET", () => {
    it("should meet iOS HIG and Material Design minimum of 44pt", () => {
      expect(MIN_TOUCH_TARGET).toBe(44);
    });
  });
});
