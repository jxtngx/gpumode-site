# App Directory Documentation

This directory contains the core application files for the GPU Mode web interface.

## Directory Structure

### `layout.tsx`
The root layout component that wraps all pages in the application. It sets up the basic HTML structure and includes global styles and metadata.

### `page.tsx`
The main page component that serves as the entry point for the application. It displays the GPU configuration interface.

### `globals.css`
Contains global CSS styles and variables used throughout the application.

### `components/`
Contains reusable React components organized into main components and UI components:

#### Main Components
- `nav.tsx`: Navigation bar component with theme switching functionality
- `footer.tsx`: Footer component with external links
- `futureLectures.tsx`: Component for displaying upcoming lecture events

#### UI Components (`components/ui/`)
- `arrowIconRight.tsx`: Right-facing arrow icon component
- `arrowIconUp.tsx`: Upward-facing arrow icon component
- `button.tsx`: Customizable button component with multiple variants
- `themeProvider.tsx`: Theme provider wrapper for managing light/dark mode

### `lib/`
Contains utility functions and shared logic:
- `utils.ts`: Common utility functions:
  - `cn()`: Combines class names using clsx and tailwind-merge
  - `formatDate()`: Formats date strings into a localized format with time

## Component Interactions

The application follows a top-down data flow where:
1. The root layout (`layout.tsx`) provides the base structure
2. The main page (`page.tsx`) handles GPU state management
3. Individual components receive props to display current status and handle user interactions


