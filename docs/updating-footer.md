# Updating Footer Navigation

The footer component contains social and resource links. This guide explains how to add or remove navigation items.

## Footer Item Structure

Each footer item follows this structure:
```tsx
<li>
  <a
    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    rel="noopener noreferrer"
    target="_blank"
    href="your-url-here"
  >
    <ArrowIconUp/>
    <p className="ml-2 h-7">Link Text</p>
  </a>
</li>
```

## Adding a New Footer Link

1. Open `site/app/components/footer.tsx`
2. Locate the `<ul>` element containing the footer items
3. Add a new `<li>` element following the structure above
4. Update the following attributes:
   - `href`: Your link URL
   - Link Text: Your navigation item name

Example adding a Twitter link:
```tsx
<li>
  <a
    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    rel="noopener noreferrer"
    target="_blank"
    href="https://twitter.com/gpumode"
  >
    <ArrowIconUp/>
    <p className="ml-2 h-7">Twitter</p>
  </a>
</li>
```

## Removing a Footer Link

1. Open `site/app/components/footer.tsx`
2. Locate the `<li>` element containing the link you want to remove
3. Delete the entire `<li>` block
4. Save the file

## Styling Notes

- Footer items are responsive and stack on mobile
- Hover effects are built into the className
- Dark mode support is included by default
- All links open in a new tab (`target="_blank"`)
