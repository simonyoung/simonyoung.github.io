// ❌ PROBLEMATIC CODE (from PR #10):
// File: src/pages/blog.astro (problematic version)

{posts.map((p: any) => {
  const post = p as any;  // ← REDUNDANT: p is already 'any'
  const href = `/blog/${post.slug}/`;
  return (
    <article>
      <h2>
        <a href={href}>
          {post.data.title}  // ← Using redundant 'post' variable
        </a>
      </h2>
      <div>
        {post.data.author && <span>{post.data.author}</span>}
        <time datetime={post.data.date.toISOString()}>
          {formatDate(post.data.date)}
        </time>
      </div>
      {post.data.description && (
        <p>{post.data.description}</p>
      )}
    </article>
  );
})}

// ✅ CLEAN CODE (fixed version):
// File: src/pages/blog.astro (clean version)

{posts.map((p: any) => {
  const href = `/blog/${p.slug}/`;  // ← Direct use, no redundant assignment
  return (
    <article>
      <h2>
        <a href={href}>
          {p.data.title}  // ← Direct use of 'p'
        </a>
      </h2>
      <div>
        {p.data.author && <span>{p.data.author}</span>}
        <time datetime={p.data.date.toISOString()}>
          {formatDate(p.data.date)}
        </time>
      </div>
      {p.data.description && (
        <p>{p.data.description}</p>
      )}
    </article>
  );
})}

/* 
ANALYSIS:
- Removed line: `const post = p as any;`
- Changed all `post.data.X` → `p.data.X`
- Same functionality, cleaner code
- Eliminates unnecessary type assertion
*/