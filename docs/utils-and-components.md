# Lecture System Documentation

## Discord Event Fetcher (`lectures/utils.ts`)

Utility function for fetching scheduled events from Discord's API.

### `fetchGuildScheduledEvents()`
- Fetches scheduled events from a Discord guild using Discord API v10
- Requires environment variables:
  - `GUILD_ID`: The Discord server ID
  - `DISCORD_TOKEN`: Discord bot token
- Returns an array of scheduled events
- Includes error handling for failed API requests

## Future Lectures Component (`components/futureLectures.tsx`)

React component and utilities for displaying upcoming lectures.

### Types and Interfaces

```typescript
interface DiscordEvent {
    id: string
    guild_id: string
    name: string
    description: string
    scheduled_start_time: string
    [key: string]: any
}
```

### Utility Functions

#### `readEventsOnDisplay<T>(filePath: string)`
- Generic function to read and parse JSON files
- Returns empty array if file doesn't exist
- Includes error handling for file operations
- Type-safe through generics

### Component: `FutureLectures`

An async React component that:
- Reads lecture data from `future_events.json`
- Displays lectures in a responsive layout
- Features:
  - Lecture name
  - Speaker information (extracted from description)
  - Formatted date display
  - Responsive design (mobile/desktop layouts)
  - Hover effects
  - Error handling with fallback UI

#### Styling
- Uses Tailwind CSS for responsive design
- Dark mode support
- Hover effects on lecture items
- Flexible layout with proper spacing

#### Error States
- Handles missing files
- Provides user feedback for loading errors
- Fallback UI for empty lecture lists
