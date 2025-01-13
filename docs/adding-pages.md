# Adding New Pages to GPUMode

## Overview
Creating new pages in GPUMode requires setting up the correct directory structure and implementing the necessary React components. This guide walks through the process of adding new pages to the site.

## Directory Structure
Each page requires its own directory in `site/app/`:
```
site/app/
├── new-page/           # Your new page directory
│   ├── page.tsx       # Main page component
│   ├── layout.tsx     # Optional: Custom layout
│   └── components/    # Optional: Page-specific components
```

## Creating a New Page

1. Create the page directory:
```bash
mkdir -p site/app/new-page
```

2. Create the basic page component:
```typescript
// site/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Page Title
      </h1>
      {/* Your page content */}
    </div>
  )
}
```

3. Optional: Add a custom layout:
```typescript
// site/app/new-page/layout.tsx
export default function NewPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-[700px]">
      {children}
    </div>
  )
}
```

## Page Organization

### Basic Structure
```
new-page/
├── page.tsx           # Required: Main content
├── layout.tsx         # Optional: Layout wrapper
├── loading.tsx        # Optional: Loading state
└── error.tsx         # Optional: Error handling
```

### Component Organization
```
new-page/
├── components/        # Page-specific components
│   ├── feature1.tsx
│   └── feature2.tsx
└── page.tsx          # Imports and uses components
```

## Best Practices

1. **File Naming**
   - Use kebab-case for directory names
   - Use PascalCase for component names
   - Keep `page.tsx` as the main entry point

2. **Component Structure**
   - Keep components modular and reusable
   - Place shared components in `site/app/components`
   - Place page-specific components in the page directory

3. **Routing**
   - Directory name becomes the URL path
   - Nested directories create nested routes
   - Index pages use `page.tsx`

## Example: Adding a Documentation Page

1. Create directory structure:
```bash
mkdir -p site/app/docs/components
touch site/app/docs/page.tsx
touch site/app/docs/layout.tsx
```

2. Implement basic page:
```typescript
// site/app/docs/page.tsx
export default function DocsPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Documentation
      </h1>
      {/* Documentation content */}
    </div>
  )
}
```

3. Add to navigation (optional):
```typescript
// site/app/components/nav.tsx
const navItems = {
  // ...existing items...
  '/docs': {
    name: 'Documentation',
  },
}
```
