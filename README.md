# vite-mpa-starter

## Dependencies

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

- `tailwind.config.cjs` - more information on [tailwindcss](https://tailwindcss.com/docs/configuration) official site;
- `views.config.js` - list of views with variables;
- `vite.config.js` - more information on [Vite](https://vitejs.dev/config) official site.

### Output directory

`/dist`

## Favicon

You can use [favicon generator](https://favicon.io).
