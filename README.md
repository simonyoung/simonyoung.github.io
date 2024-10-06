# [Astro](https://astro.build) GitHub Pages Template

## � Automatic Deployment to GitHub Pages

This minimal Astro project template comes with a [GitHub Action](https://github.com/features/actions) that automatically deploys your site to [GitHub Pages](https://pages.github.com/).

For more information, please see our complete deployment guide—[Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

## � Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
�   └── layouts/
│       └── BlogPostLayout.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🌟 Setting up Tailwind CSS

To set up Tailwind CSS in your Astro project, follow these steps:

1. Install the necessary dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer
```

2. Create the Tailwind and PostCSS configuration files:

```sh
npx tailwindcss init
```

This will create a `tailwind.config.js` file in the root of your project. Next, create a `postcss.config.js` file with the following content:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. Configure the `tailwind.config.js` file to include your content:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Update your `astro.config.mjs` file to include the Tailwind integration:

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://simonyoung.io',
    integrations: [tailwind()],
});
```

5. Add Tailwind CSS classes to your Astro components and pages for basic styling. For example, update the `src/pages/index.astro` file:

```astro
---
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content={Astro.generator} />
    <title>Simon Young</title>
  </head>
  <body class="bg-gray-100 text-gray-900">
    <header class="bg-white shadow">
      <h1 class="text-3xl font-bold text-center py-4"><a href="/">Simon Young</a></h1>
    </header>

    <main class="max-w-4xl mx-auto p-4">
      <p class="text-lg mb-4">I’m Simon, an experienced software engineering leader currently working at <a href="https://lego.com/" class="text-blue-500 hover:underline">The LEGO Group</a>.</p>

      <ul class="list-disc list-inside mb-4">
        <li>More than 25 years of experience in all aspects of software engineering and architecture</li>
        <li>Senior Director of Engineering for Shopper Technology at the LEGO Group, leading a 100+ person software engineering team</li>
      </ul>

      <p class="text-lg mb-4">Find me on <a href="https://www.linkedin.com/in/simonyounguk/" class="text-blue-500 hover:underline">LinkedIn</a> 🤘</p>

      <section aria-labelledby="articles-heading" class="mt-8">
        <h2 id="articles-heading" class="text-2xl font-bold mb-4">Articles</h2>
        <ul class="list-disc list-inside">
          <li><a href="/blog/leadership-with-shared-purpose" class="text-blue-500 hover:underline">Leadership with Shared Purpose</a> (September 30, 2020)</li>
          <li><a href="/blog/on-leading-engineering-teams" class="text-blue-500 hover:underline">On Leading Engineering Teams</a> (December 10, 2018)</li>
        </ul>
      </section>
    </main>

    <footer class="bg-white shadow mt-8 p-4 text-center">
      <p>&copy; Simon Young, 1999-2024.</p>
    </footer>
  </body>
</html>
```

6. Repeat the process for other pages and components as needed, such as `src/pages/blog.astro` and `src/layouts/BlogPostLayout.astro`.

By following these steps, you will have successfully set up Tailwind CSS in your Astro project and applied basic styling to your components and pages.
