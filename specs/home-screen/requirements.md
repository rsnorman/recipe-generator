# Home Screen Requirements

## Overview

The home screen serves as the central hub for the HotSauce AI mobile app, providing users with quick access to capture hot sauce photos and view their recent scans. This screen focuses on layout and UI structure without implementing actual camera or API functionality.

## User Stories

### 1. View Home Screen Layout

**As a** hot sauce enthusiast
**I want to** see a well-organized home screen when I open the app
**So that I** can quickly access the main features and understand the app's purpose

**Acceptance Criteria:**

- **Given** I have the HotSauce AI app installed
- **When** I open the app or navigate to the home screen
- **Then** I see a header with "HotSauce AI" branding and flame icon
- **And** I see a profile button in the header
- **And** I see a prominent "Take a Photo" call-to-action card
- **And** I see an "Upload from gallery" text link below the CTA
- **And** I see a "Recent Sauces" section
- **And** I see bottom tab navigation with Home, Recipes, and Profile tabs

### 2. Access Photo Capture Options

**As a** user wanting to scan a hot sauce bottle
**I want to** easily find and tap photo capture options
**So that I** can quickly add new hot sauces to my collection

**Acceptance Criteria:**

- **Given** I am on the home screen
- **When** I view the main content area
- **Then** I see a large "Take a Photo" card with a camera icon
- **And** the card is visually prominent and tappable
- **And** I see "Upload from gallery" as a secondary option below
- **And** both options are clearly distinguishable and accessible

### 3. View Recent Sauces Collection

**As a** returning user with scanned sauces
**I want to** see my recently scanned hot sauces
**So that I** can quickly access sauces I've previously identified

**Acceptance Criteria:**

- **Given** I have previously scanned hot sauces
- **When** I scroll to the "Recent Sauces" section
- **Then** I see a list/grid of my recent sauces
- **And** each sauce displays a thumbnail image
- **And** each sauce shows its name
- **And** each sauce displays a heat level indicator with flame icon(s)
- **And** the sauces are ordered by most recently scanned

### 4. Experience Empty State

**As a** new user without any scanned sauces
**I want to** see helpful guidance when I have no sauces
**So that I** understand how to start using the app

**Acceptance Criteria:**

- **Given** I am a new user with no scanned sauces
- **When** I view the "Recent Sauces" section
- **Then** I see an empty state message
- **And** the message explains there are no sauces yet
- **And** the message encourages me to scan my first sauce
- **And** the empty state is visually pleasant and not error-like

### 5. Navigate Using Bottom Tabs

**As a** user navigating the app
**I want to** use bottom tab navigation
**So that I** can easily switch between main app sections

**Acceptance Criteria:**

- **Given** I am on any screen in the app
- **When** I look at the bottom of the screen
- **Then** I see persistent tab navigation
- **And** the tabs include Home, Recipes, and Profile
- **And** the Recipes tab has a floating action button (FAB) style camera icon
- **And** the current tab (Home) is visually highlighted
- **And** all tabs have appropriate icons and labels

## Business Rules

1. **Navigation Hierarchy**: The home screen must be the default landing screen when opening the app
2. **Photo Options Priority**: "Take a Photo" must be more prominent than "Upload from gallery"
3. **Recent Sauces Limit**: Display maximum of 10 recent sauces on home screen (with option to view all)
4. **Heat Level Display**: Heat levels should use 1-5 flame icons for visual representation
5. **Tab Persistence**: Bottom tab navigation must remain visible on all primary screens

## Non-Functional Requirements

### Performance

- Screen must render within 500ms on mid-range devices
- Scroll performance must maintain 60fps with up to 10 sauce items
- Image thumbnails should use lazy loading for optimal performance

### Accessibility

- All interactive elements must have minimum 44x44pt touch targets
- Screen must support screen readers with appropriate labels
- Color contrast must meet WCAG 2.1 AA standards
- Text must be scalable based on system font size settings

### Design

- Must follow React Native platform conventions for iOS/Android
- Support both light and dark mode based on system preferences
- Responsive layout must work on phones (5" to 7" screens)
- Support portrait orientation (landscape optional for MVP)

## Testing Requirements

### E2E Test Flows

1. **First Launch Experience**
   - Open app → View home screen → See empty state → Tap "Take a Photo" → Navigate back

2. **Return User Flow**
   - Open app → View recent sauces → Tap a sauce item → View details → Navigate back

3. **Navigation Flow**
   - Open home → Tap Profile tab → Tap Recipes tab → Tap Home tab → Verify correct screens

### Test Environment

- Test on both iOS and Android simulators
- Test with 0, 1, 5, and 10 recent sauce items
- Test with different screen sizes (small, medium, large phones)

### Test Data

- Mock sauce data with varying heat levels (1-5)
- Mock user profile data
- Sample sauce images (placeholder during development)

## Dependencies

### External Libraries

- React Native component library (to be determined - e.g., React Native Elements, NativeBase, or Tamagui)
- Icon library for flame, camera, and navigation icons
- Image handling library for thumbnails and lazy loading

### Internal Dependencies

- Expo Router v6 configuration for navigation
- TypeScript interfaces for sauce data models
- Shared UI components (headers, cards, buttons)

## Out of Scope

The following items are explicitly NOT included in this MVP phase:

1. **Camera Functionality**: Actual camera integration and photo capture
2. **Image Upload**: Gallery selection and image upload processing
3. **API Integration**: Backend calls for sauce identification
4. **Sauce Details**: Full sauce detail screens and information
5. **Search/Filter**: Ability to search or filter recent sauces
6. **User Authentication**: Login, signup, or profile management
7. **Recipes Screen**: Full recipes functionality (placeholder only)
8. **Profile Screen**: Full profile functionality (placeholder only)
9. **Offline Support**: Caching and offline functionality
10. **Push Notifications**: Any notification features

## Success Metrics

1. **User Engagement**
   - 80% of users tap "Take a Photo" within first 30 seconds
   - Average time to first interaction < 5 seconds

2. **Technical Performance**
   - Initial render time < 500ms
   - No frame drops during scrolling
   - Zero accessibility violations

3. **Usability**
   - 90% task completion rate for finding photo capture
   - 100% users can navigate between tabs successfully
   - Clear understanding of app purpose from home screen alone

## Implementation Notes

- Use Expo Router file-based routing with `app/index.tsx` as home screen
- Implement with TypeScript strict mode and proper type definitions
- Follow React Native best practices for performance optimization
- Ensure all text strings are externalized for future localization
- Use semantic component names for better code maintainability
