# Updating Navigation Items

## Overview
The site's navigation is configured through the `navItems` object in `app/components/nav.tsx`. Adding or removing navigation items requires both updating this object and ensuring the corresponding directory structure exists.

## Navigation Object Structure
```typescript
const navItems = {
  '/path': {
    name: 'Display Name',
  }
}
```

## Adding a New Navigation Item

1. Update `nav.tsx`:
```typescript
const navItems = {
  // ...existing entries...
  '/new-route': {
    name: 'New Page',
  }
}
```

2. Create corresponding directory structure:
```bash
mkdir -p site/app/new-route
touch site/app/new-route/page.tsx
```

3. Create the page component in `page.tsx`:
```typescript
export default function NewRoutePage() {
  return (
    <div>
      {/* Your page content */}
    </div>
  )
}
```

## Removing a Navigation Item

1. Remove the entry from `navItems`:
```typescript
const navItems = {
  '/': {
    name: 'Home',
  }
  // '/removed-route' entry deleted
}
```

2. Optional: Remove the corresponding directory:
```bash
rm -rf site/app/removed-route
```

## Directory Structure
Each navigation item needs a corresponding directory in `site/app/`:
```
site/app/
├── page.tsx              # Home route ('/')
├── lectures/            # Lectures route ('/lectures')
│   └── page.tsx
└── new-route/          # New route ('/new-route')
    └── page.tsx
```

## Important Notes

- The path key must start with a forward slash ('/')
- Directory names must match the path (excluding the slash)
- Each route directory must contain a `page.tsx` file
- Next.js handles routing automatically based on directory structure
- Use kebab-case for multi-word routes (e.g., '/new-route')
