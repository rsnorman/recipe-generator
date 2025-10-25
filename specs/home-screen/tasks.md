# Home Screen Implementation Tasks

**Feature:** Home Screen
**Phase:** Implementation
**Approach:** Test-Driven Development (Red-Green-Refactor)
**Estimated Total Time:** 24-30 hours (4-5 days at 6h/day)

---

## Task 1: Type Definitions and Mock Data Service

**Status:** [ ] Not Started
**Estimated Time:** 3-4 hours
**Dependencies:** None

### Description

Create TypeScript type definitions for the Sauce model and related interfaces. Implement mock data service with AsyncStorage for persisting sample sauce data.

### Acceptance Criteria

- [ ] Tests written and failing (Red)
- [ ] Implementation passes tests (Green)
- [ ] Code refactored (Refactor)
- [ ] Sauce interface defined with validation rules (heatLevel 1-5, non-empty name)
- [ ] Mock data service exports getRecentSauces(), addMockSauce(), clearSauces()
- [ ] AsyncStorage integration working with mock delays
- [ ] Sample fixture data with 5 diverse sauces
- [ ] TypeScript strict mode compliance with explicit return types

### Files to Create

- [ ] `/Users/rnorman/Projects/recipe-generator/app/types/sauce.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/types/sauce.test.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/services/mockData.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/services/mockData.test.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/constants/theme.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/__tests__/fixtures/sauces.json`

### TDD Approach

1. Write tests for Sauce type validation helper functions
2. Write tests for mockData service methods (getRecentSauces, addMockSauce, clearSauces)
3. Verify tests fail (Red)
4. Implement type definitions and validation
5. Implement mock service with AsyncStorage
6. Verify tests pass (Green)
7. Refactor for clarity and performance

### Notes

- Use `@react-native-async-storage/async-storage` for persistence
- Mock delays (200ms) to simulate real API latency
- Create reusable theme constants (colors, spacing, typography)

---

## Task 2: Atomic UI Components - Header, PhotoCTACard, SauceCard

**Status:** [ ] Not Started
**Estimated Time:** 5-6 hours
**Dependencies:** Task 1 (types and theme constants)

### Description

Build and test three foundational UI components: Header (branding + profile), PhotoCTACard (camera CTA), and SauceCard (individual sauce display). Each component is fully isolated and testable.

### Acceptance Criteria

- [ ] Tests written and failing (Red)
- [ ] Implementation passes tests (Green)
- [ ] Code refactored (Refactor)
- [ ] Header displays "HotSauce AI" with flame icon and profile button
- [ ] PhotoCTACard shows camera icon, "Take a Photo" text, and "Upload from gallery" link
- [ ] SauceCard displays image thumbnail, name (ellipsized), and 1-5 flame heat level icons
- [ ] All components have proper TypeScript prop interfaces
- [ ] Accessibility labels and touch targets (44x44pt minimum)
- [ ] Components use theme constants for consistent styling
- [ ] React Native Testing Library tests verify rendering and interactions

### Files to Create

- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/Header.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/Header.test.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/PhotoCTACard.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/PhotoCTACard.test.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/SauceCard.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/SauceCard.test.tsx`

### TDD Approach

1. Write tests for Header component (renders title, icon, profile button, handles press)
2. Write tests for PhotoCTACard (renders CTA, upload link, handles presses)
3. Write tests for SauceCard (renders image, name, heat level, handles press)
4. Verify tests fail (Red)
5. Implement Header with SafeAreaView and styling
6. Implement PhotoCTACard with Pressable and icons
7. Implement SauceCard with expo-image and flame icons
8. Verify tests pass (Green)
9. Refactor for component reusability and styling consistency

### Notes

- Use `@expo/vector-icons` for Ionicons (flame, camera, person icons)
- Use `expo-image` for optimized image loading in SauceCard
- Test with React Native Testing Library `render`, `fireEvent`, `screen`
- Add haptic feedback for iOS button presses (optional enhancement)

---

## Task 3: RecentSaucesGrid and RecentSaucesEmptyState Components

**Status:** [ ] Not Started
**Estimated Time:** 4-5 hours
**Dependencies:** Task 2 (SauceCard component)

### Description

Create RecentSaucesGrid component that displays a 2-column grid of sauce cards using FlatList for virtualization. Implement EmptyState component for new users without sauces.

### Acceptance Criteria

- [ ] Tests written and failing (Red)
- [ ] Implementation passes tests (Green)
- [ ] Code refactored (Refactor)
- [ ] RecentSaucesGrid renders 2-column grid with FlatList
- [ ] Grid displays "Recent Sauces" section header
- [ ] RecentSaucesEmptyState shows friendly message and encouragement
- [ ] Grid shows RecentSaucesEmptyState when sauces array is empty
- [ ] Grid handles varying number of items (1, 5, 10 sauces)
- [ ] onSaucePress callback properly invoked with sauce data
- [ ] Proper TypeScript interfaces for props

### Files to Create

- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/RecentSaucesGrid.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/RecentSaucesGrid.test.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/RecentSaucesEmptyState.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/RecentSaucesEmptyState.test.tsx`

### TDD Approach

1. Write tests for RecentSaucesEmptyState rendering
2. Write tests for RecentSaucesGrid with empty array
3. Write tests for RecentSaucesGrid with 1, 5, 10 sauces
4. Write tests for sauce press interaction
5. Verify tests fail (Red)
6. Implement RecentSaucesEmptyState with text and styling
7. Implement RecentSaucesGrid with FlatList and 2-column layout
8. Verify tests pass (Green)
9. Refactor for performance (React.memo if needed)

### Notes

- Use FlatList with `numColumns={2}` for virtualization
- Add `keyExtractor` using sauce.id
- Test with fixture data from Task 1
- Consider `contentContainerStyle` for grid padding

---

## Task 4: HomeScreen Main Container Integration

**Status:** [ ] Not Started
**Estimated Time:** 4-5 hours
**Dependencies:** Task 3 (all UI components complete)

### Description

Integrate all components into the main HomeScreen container at `app/(tabs)/index.tsx`. Coordinate data fetching from mock service, manage screen layout with ScrollView, and handle component interactions.

### Acceptance Criteria

- [ ] Tests written and failing (Red)
- [ ] Implementation passes tests (Green)
- [ ] Code refactored (Refactor)
- [ ] HomeScreen fetches mock sauce data on mount using useEffect
- [ ] Screen composes Header, PhotoCTACard, and RecentSaucesGrid
- [ ] ScrollView provides smooth scrolling with proper content insets
- [ ] Photo CTA shows placeholder alert when tapped
- [ ] Sauce card tap shows placeholder alert with sauce name
- [ ] Loading state handled gracefully (optional for MVP)
- [ ] Safe area insets properly handled

### Files to Create

- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/index.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/index.test.tsx`

### TDD Approach

1. Write tests for HomeScreen rendering with mock data service
2. Write tests for data fetching on component mount
3. Write tests for CTA interactions (camera, upload, sauce tap)
4. Verify tests fail (Red)
5. Implement HomeScreen with component composition
6. Implement data fetching with useState and useEffect
7. Implement interaction handlers with placeholder alerts
8. Verify tests pass (Green)
9. Refactor for code organization and readability

### Notes

- Mock the mockData service in tests using Jest mocks
- Use `waitFor` from React Native Testing Library for async data loading
- Test both empty state and populated state scenarios
- Follow Expo Router conventions for default export

---

## Task 5: Bottom Tab Navigation Setup

**Status:** [ ] Not Started
**Estimated Time:** 3-4 hours
**Dependencies:** Task 4 (HomeScreen complete)

### Description

Configure Expo Router tabs layout with Home, Recipes (FAB-style), and Profile tabs. Create placeholder screens for Recipes and Profile with basic navigation structure.

### Acceptance Criteria

- [ ] Tests written and failing (Red)
- [ ] Implementation passes tests (Green)
- [ ] Code refactored (Refactor)
- [ ] Tabs layout configured in `app/(tabs)/_layout.tsx`
- [ ] Home tab shows house icon and "Home" label
- [ ] Recipes tab styled as FAB with camera icon (centered, elevated)
- [ ] Profile tab shows person icon and "Profile" label
- [ ] Current tab visually highlighted
- [ ] Recipes and Profile screens show placeholder content
- [ ] Navigation between tabs works correctly
- [ ] TypeScript strict mode compliance

### Files to Create

- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/_layout.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/_layout.test.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/recipes.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/recipes.test.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/profile.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/profile.test.tsx`

### TDD Approach

1. Write tests for tabs layout configuration (verify tab options)
2. Write tests for placeholder screens (Recipes, Profile)
3. Write tests for navigation between tabs
4. Verify tests fail (Red)
5. Implement tabs layout with Expo Router Tabs component
6. Configure tab bar icons and labels
7. Implement placeholder screens with "Coming Soon" UI
8. Verify tests pass (Green)
9. Refactor for styling consistency and accessibility

### Notes

- Use Expo Router `Tabs` component from `expo-router/tabs`
- Configure `tabBarIcon` for each tab
- Style Recipes tab with larger icon and elevated background (FAB)
- Test navigation with React Navigation testing utilities

---

## Task 6: Integration Polish and Theme Refinement

**Status:** [ ] Not Started
**Estimated Time:** 2-3 hours
**Dependencies:** Task 5 (navigation complete)

### Description

Polish the complete home screen experience with theme refinements, safe area handling, platform-specific adjustments, and accessibility improvements. Ensure smooth 60fps performance.

### Acceptance Criteria

- [ ] Tests written and failing (Red)
- [ ] Implementation passes tests (Green)
- [ ] Code refactored (Refactor)
- [ ] Safe area insets properly handled on iOS notched devices
- [ ] Dark mode support with theme color switching
- [ ] Platform-specific styling (iOS shadows vs Android elevation)
- [ ] All interactive elements meet 44x44pt minimum touch targets
- [ ] Color contrast meets WCAG 2.1 AA standards
- [ ] Screen renders in < 500ms on mid-range devices (measure with React DevTools)
- [ ] Smooth 60fps scrolling with 10 sauce items (test with performance monitor)

### Files to Modify

- [ ] `/Users/rnorman/Projects/recipe-generator/app/constants/theme.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/constants/theme.test.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/Header.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/PhotoCTACard.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/components/home/SauceCard.tsx`
- [ ] `/Users/rnorman/Projects/recipe-generator/app/(tabs)/index.tsx`

### TDD Approach

1. Write tests for theme utilities (dark mode color switching)
2. Write tests for accessibility labels and roles
3. Write tests for platform-specific rendering
4. Verify tests fail (Red)
5. Enhance theme.ts with light/dark mode colors
6. Add useColorScheme hook for dynamic theming
7. Improve accessibility labels and semantic components
8. Add platform-specific styling (Platform.select)
9. Verify tests pass (Green)
10. Refactor and optimize (React.memo for expensive components)

### Notes

- Use `react-native.useColorScheme()` for system theme detection
- Test with iOS Accessibility Inspector and Android TalkBack
- Measure performance with React DevTools Profiler
- Consider `React.memo` for SauceCard and other repeated components

---

## Task 7: End-to-End Test Suite

**Status:** [ ] Not Started
**Estimated Time:** 4-5 hours
**Dependencies:** Task 6 (complete integration)

### Description

Generate and implement E2E test structure using spec-e2e-test-generator agent. Create Cucumber feature files, Playwright/Detox step definitions, and Page Objects for critical user flows with real services.

### Acceptance Criteria

- [ ] Run spec-e2e-test-generator agent to scaffold test structure
- [ ] Cucumber feature files generated for user stories
- [ ] Step definitions implemented with Detox or Maestro
- [ ] Page Objects created for Home, Recipes, Profile screens
- [ ] Docker Compose test environment configured (if needed)
- [ ] Tests run against real AsyncStorage (minimal mocking)
- [ ] First Launch Experience flow passes
- [ ] Return User Flow passes (with mock sauce data)
- [ ] Navigation Flow passes (all tabs)
- [ ] Tests run on both iOS and Android simulators

### Files to Create

- [ ] `/Users/rnorman/Projects/recipe-generator/e2e/features/home-screen.feature`
- [ ] `/Users/rnorman/Projects/recipe-generator/e2e/steps/home-screen.steps.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/e2e/page-objects/HomePage.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/e2e/page-objects/RecipesPage.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/e2e/page-objects/ProfilePage.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/e2e/support/setup.ts`
- [ ] `/Users/rnorman/Projects/recipe-generator/.detoxrc.js` (or Maestro config)

### E2E Test Scenarios

**Scenario 1: First Launch Experience**

```gherkin
Given I am a new user launching the app for the first time
When I view the home screen
Then I should see the "HotSauce AI" header
And I should see the "Take a Photo" CTA card
And I should see an empty state message in Recent Sauces
When I tap "Take a Photo"
Then I should see a placeholder alert
```

**Scenario 2: Return User Flow**

```gherkin
Given I am a returning user with 5 scanned sauces
When I open the app
Then I should see 5 sauce cards in the Recent Sauces grid
And each sauce should display a name and heat level
When I tap a sauce card
Then I should see a placeholder alert with the sauce name
```

**Scenario 3: Navigation Flow**

```gherkin
Given I am on the home screen
When I tap the "Profile" tab
Then I should see the profile placeholder screen
When I tap the "Recipes" tab
Then I should see the recipes placeholder screen
When I tap the "Home" tab
Then I should return to the home screen
```

### TDD Approach (E2E)

1. Run spec-e2e-test-generator agent to generate scaffolding
2. Implement Page Objects for screen interactions
3. Write step definitions for Cucumber scenarios
4. Configure test environment (Detox/Maestro + simulators)
5. Run tests and verify they fail (Red)
6. Fix any integration issues discovered by E2E tests
7. Verify tests pass (Green)
8. Refactor test code for maintainability

### Notes

- **E2E Framework Decision**: Use Detox (recommended for React Native) or Maestro (simpler setup)
- Reference e2e-testing-standards.md for framework conventions
- Use real AsyncStorage (no mocking) for authentic test environment
- Test on iOS Simulator 15+ and Android Emulator API 30+
- Consider CI/CD integration for automated E2E test runs

---

## Definition of Done

For each task, the following must be completed:

- [ ] All acceptance criteria met
- [ ] Tests written first (TDD Red phase)
- [ ] Implementation passes all tests (TDD Green phase)
- [ ] Code refactored for quality (TDD Refactor phase)
- [ ] TypeScript strict mode with no errors
- [ ] ESLint passes with no warnings
- [ ] Prettier formatting applied
- [ ] Code reviewed and approved
- [ ] Committed to feature branch `spec/home-screen`

## Overall Feature Completion Checklist

- [ ] All 7 tasks completed
- [ ] E2E tests passing on iOS and Android
- [ ] Performance requirements met (< 500ms render, 60fps scroll)
- [ ] Accessibility requirements met (WCAG 2.1 AA)
- [ ] Documentation updated (if needed)
- [ ] Feature branch merged to main

---

## Notes

- **Sequential Execution**: Complete tasks in order (1 → 2 → 3 → 4 → 5 → 6 → 7)
- **TDD Mandatory**: Every task follows Red-Green-Refactor cycle
- **Test Colocation**: Test files sit next to implementation files
- **Mock Data**: All data from mock service, no real backend
- **Placeholder Actions**: Camera/upload/sauce details show alerts (not implemented)
- **Cross-Platform**: Test on both iOS and Android throughout
- **Performance Monitoring**: Use React DevTools Profiler and React Native performance monitor

## Risk Mitigation

1. **Performance Risk**: If scrolling isn't smooth, optimize with React.memo and FlatList tuning
2. **Navigation Risk**: If Expo Router tabs are complex, use documentation and examples
3. **Testing Risk**: If E2E framework setup is difficult, start with Maestro (simpler than Detox)
4. **Scope Creep**: Strictly avoid implementing camera, API, or auth features (out of scope)
