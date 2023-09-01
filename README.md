# ![WTU](./public/static/images/logo.png)

## ⚠️ Deprecated

_Use `vite-mpa-starter` instead_

_Extensible and scalable toolkit for templates prototyping_

**WTU** is short for [W](https://github.com/webpack/webpack)ebpack,
[T](https://github.com/tailwindlabs/tailwindcss)ailwindCSS and
[U](https://github.com/uikit/uikit)Ikit.

Includes the following tools:

- Pre-configurated [express](https://github.com/expressjs/express) based dev
  server;
- Pre-configurated [webpack 5](https://github.com/webpack/webpack);
- Utility power of [TailwindCSS](https://github.com/tailwindlabs/tailwindcss);
- [UIkit](https://github.com/uikit/uikit) for developing fast and powerful web
  interfaces;
- [Sass](https://sass-lang.com/) preprocessor for working with stylesheets;
- [imagemin-cli](https://github.com/imagemin/imagemin-cli) for batch image
  minification.

## Installation and pre-configuration

### Install dependencies

```
$ yarn
```

### Set environment variables

```
$ cp .env.example .env
```

### Create pages for your project

Place your pages in a `views` folder.

WTU uses the [EJS](https://github.com/mde/ejs) templating language and `*.html`
file extension.

### Configure routes

The root is reserved for the automatically generated list of views.

- Create a route for your page in the `routes` folder;
- Declare and use your route in `server.js` file.

_e.g._

```js
// `routes/home.js`

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('home', { // path to your `*.html` file
    // page variables
    title: 'Home'
  });
});

module.exports = router;
```

```js
// server.js

// ...

// routes initialization
var homeRouter = require('./routes/home');

// ...

// use routes
app.use('/home', homeRouter);
```

### JS files

- Include your external modules to `src/external/external.js` file;
- Include your code to `src/app.js` file.
- To make external classes available for use from a `window` object, use
  [expose-loader](https://webpack.js.org/loaders/expose-loader/) inside the
  `rules` section of your `webpack.config.js` file.

_e.g._

```js
// ...
{
  test: require.resolve('jquery'),
  loader: 'expose-loader',
  options: {
    exposes: ['$', 'jQuery']
  }
}
// ...
```

If you don't need any of external dependencies - just remove them
from the `entry` section of `webpack.config.js` file.

### Styles

Path: `src/scss`.

You can use [SCSS features](https://sass-lang.com/guide), UIkit
[hooks](https://getuikit.com/docs/sass#use-hooks), global
[theme variables](https://getuikit.com/docs/sass#use-variables), `@apply` from
TailwindCSS and other features of TailwindCSS, as example
[theme configuration](https://tailwindcss.com/docs/configuration).

SCSS directory structure is based on
[inuitcss](https://github.com/inuitcss/inuitcss) structure.

- `settings`: Global variables, site-wide settings, fonts import etc.;
- `tools`: Site-wide mixins and functions;
- `generic`: Low-specificity, far-reaching rulesets (e.g. resets);
- `uikit`: UIkit theme variables, mixins and core styles;
- `objects`: Objects, abstractions, and design patterns (e.g. `.o-layout {}`);
- `components`: Discrete, complete chunks of UI (e.g. `.c-about__map {}`).

**Prefixes**

- `o-` : objects;
- `c-` : components;

**About the `app.scss` file**

This is the main `entry` point for all styles, please follow the structure below
when adding new files here.

- Settings;
- Tools;
- Generic;
- UIkit & TailwindCSS;
- Objects;
- Components.

### Assets

Path: `src/assets`.

You can place your **fonts** and **images** here used in your code (not inside
`*.html` templates).

Webpack will copy this files to `public/dist/fonts` and `public/dist/images`
directories.

**Supported formats**

Images:

- `png`;
- `jpg`;
- `jpeg`;
- `gif`;
- `svg`.

Fonts:

- `woff`;
- `woff2`;
- `ttf`.

### Static assets

Path: `public/static`.

Here you can place any type of static assets for your project (can be used
inside `*.html` files).

_e.g._

- `images/test.jpg`;
- `files/demo.mp4`;
- `files/document.pdf`.

## CLI commands

> ⚠️ Tested on `Ubuntu 20.04.3 LTS` only. Use it on your own risk.

### serve

Run express dev server.

```
$ yarn serve
```

### watch

Build your project for development and run webpack watcher.

```
$ yarn watch
```

### build:dev

Build your project for development.

```
$ yarn build:dev
```

### build:prod

Build your project for production.

```
$ yarn build:prod
```

### icons:build

> ⚠️ Use this command first time only.

```
$ yarn icons:build
```

Place your `svg` icons to `icons` folder and run this command.

_If you need to rebuild your icons, please, use `icons:rebuild` command._

_SVG icon example_

```svg
<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5" />
    <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z" />
</svg>
```

More info about custom UIkit icons
[here](https://getuikit.com/docs/custom-icons).

### icons:rebuild

> ⚠️ Use this command after you made first build of custom icons only.

Same as `icons:build`, but can be used multiple times.

```
$ yarn icons:rebuild
```

### imagemin

Batch images optimization.

- Place your source images here: `imagemin/source`;
- Run command;
- Get your optimized images here: `imagemin/optimized`.

```
$ yarn imagemin
```
