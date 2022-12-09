# vite-mpa-starter

The main problem being solved is the ability to run the project in a browser without a server.

Simply run the `npm run build` CLI command and open the `.html` files located in the `/dist` directory in your web browser.

_You can remove unnecessary dependencies such as Alpine.js or jQuery._

## Command line interface

start dev server, aliases: `vite dev`, `vite serve`

```
npm run dev
```

build for production (creates `/dist`)

```
npm run build
```

locally preview production build

```
npm run preview
```

### Dependencies

installing dependencies

```
npm install
```

add new package to `devDependencies`

```
npm add -D [package_name]
```

add new package to `dependencies`

```
npm add [package_name]
```

remove package

```
npm remove [package_name]
```

## File structure

### Source files

The `.html` files use the [handlebars](https://handlebarsjs.com) template engine and located at the root of src.

- `/src`
  - `/assets` - fonts, images;
  - `/partials` - [handlebars partials](https://handlebarsjs.com/guide/partials.html);
  - `/public` - Vite will copy files from this directory into `/dist` by default;
  - `/scripts` - `/src/scripts/main.js` - entry point by default, should be added to each page;
  - `/styles` - `.css` files with `/src/styles/main.css` entry point by default, **already included**: [tailwindcss](https://tailwindcss.com/docs/configuration) with official plugins, [postcss-nesting](https://www.npmjs.com/package/postcss-nesting), [postcss-import](https://www.npmjs.com/package/postcss-import), [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media), [postcss-custom-selectors](https://www.npmjs.com/package/postcss-custom-selectors).

### Configs

- `/tailwind.config.cjs` - more information on [tailwindcss](https://tailwindcss.com/docs/configuration) official site;
- `/views.config.js` - list of views with variables;
- `/vite.config.js` - more information on [Vite](https://vitejs.dev/config) official site.

### Output directory

`/dist`

## Code style

### CSS

Each chunk of CSS code must be in a directory depending on its type (`/src/styles/Components` or `/src/styles/Section`).

Use prefixes for custom classes.

- `c-` for `Components`;
- `s-` for `Sections`.

Import your fonts in the `/src/styles/fonts.css` file. CSS variables are placed in the `/src/styles/variables.css` file.

### JavaScript

Custom components must be located in the `/src/scripts/Components` directory and included in the `/src/scripts/main.js` file.

## Useful links

### [Favicon Generator](https://favicon.io)

> Quickly generate your favicon from text, image, or choose from hundreds of emojis.

### [Alpine.js](https://alpinejs.dev/start-here)

> Alpine is a rugged, minimal tool for composing behavior directly in your markup.

### [Alpine.js Mask Plugin](https://alpinejs.dev/plugins/mask)

> Alpine's Mask plugin allows you to automatically format a text input field as a user types.

### [jQuery API](https://api.jquery.com)

> jQuery is a fast, small, and feature-rich JavaScript library.

### Tailwindcss official plugins

- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin);
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms);
- [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio);
- [@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp);
- [@tailwindcss/container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries).
