import { defineConfig } from "vite";
import { resolve } from "path";
import FastGlob from "fast-glob";

import handlebarsPlugin from "vite-plugin-handlebars";

import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";
import postcssImport from "postcss-import";
import postcssNesting from "postcss-nesting";
import postcssCustomMedia from "postcss-custom-media";
import postcssCustomSelectors from "postcss-custom-selectors";
import autoprefixer from "autoprefixer";

import { viewsConfig } from "./views.config.js";

const htmlScriptAttrReplacePlugin = () => {
  return {
    name: "html-script-attr-replace",
    transformIndexHtml(html) {
      return html.replace(/type="module" crossorigin/g, "defer");
    }
  };
};

export default defineConfig({
  root: resolve(process.cwd(), "src"),
  base: "./",
  plugins: [
    handlebarsPlugin({
      context(path) {
        return viewsConfig[path];
      },
      partialDirectory: resolve(process.cwd(), "./src/partials")
    }),
    htmlScriptAttrReplacePlugin()
  ],
  css: {
    postcss: {
      plugins: [
        postcssImport,
        tailwindcssNesting(postcssNesting),
        postcssCustomMedia,
        postcssCustomSelectors,
        tailwindcss,
        autoprefixer
      ]
    }
  },
  appType: "mpa",
  build: {
    modulePreload: {
      polyfill: false
    },
    outDir: resolve(process.cwd(), "dist"),
    minify: "terser",
    emptyOutDir: true,
    TerserOptions: {
      keep_classnames: true,
      keep_fnames: true,
      module: false
    },
    rollupOptions: {
      input: FastGlob.sync(["./src/*.html"]).map((entry) => resolve(process.cwd(), entry)),
      output: {
        chunkFileNames: "scripts/[name].js",
        entryFileNames: "scripts/[name].js",
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/css$/.test(extType)) {
            extType = "styles";
          } else if (/png$|jpe?g$|svg$|gif$|tiff$|bmp$|ico$/.test(extType)) {
            extType = "images";
          } else if (/ttf$|woff$|woff2$/.test(extType)) {
            extType = "fonts";
          } else {
            extType = "misc";
          }
          return `${extType}/[name][extname]`;
        }
      }
    }
  }
});
