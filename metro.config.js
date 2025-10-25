// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Exclude test files from being bundled
config.resolver.blockList = [
  /.*\.test\.(ts|tsx|js|jsx)$/,
  /.*\/__tests__\/.*-test\.(ts|tsx|js|jsx)$/,
];

module.exports = config;
