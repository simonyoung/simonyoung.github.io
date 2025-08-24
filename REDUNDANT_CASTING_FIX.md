# Fix for Redundant Type Casting Issue

## Problem
In the PR #10 (new-layout branch), there was redundant type casting in `blog.astro`:

```typescript
// PROBLEMATIC CODE (redundant):
{posts.map((p: any) => {
  const post = p as any;  // ❌ Redundant: p is already typed as 'any'
  const href = `/blog/${post.slug}/`;
  return (
    // ... JSX content using 'post' variable
  );
```

## Solution
Remove the redundant assignment and type assertion, use the parameter directly:

```typescript
// FIXED CODE (clean):
{posts.map((p: any) => {
  const href = `/blog/${p.slug}/`;  // ✅ Use 'p' directly
  return (
    <article>
      <h2>{p.data.title}</h2>      // ✅ Use 'p' directly
      <span>{p.data.author}</span>  // ✅ Use 'p' directly
      <time>{formatDate(p.data.date)}</time> // ✅ Use 'p' directly
    </article>
  );
```

## Why This Fix Matters
1. **Eliminates redundant code**: No need for `const post = p as any;` when `p` is already `any`
2. **Improves readability**: Less variable assignments to track
3. **Reduces cognitive load**: One less intermediate variable
4. **TypeScript best practices**: Don't cast to `any` unnecessarily

## Files Affected in PR #10
- `src/pages/blog.astro` - Main fix location
- `src/pages/index.astro` - Similar cleanup needed

The fix removes the unnecessary intermediate variable assignment while maintaining identical functionality.