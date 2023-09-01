const shared = {
  app: "vite-mpa-starter",
  lang: "en-US",
  description: "Description example."
};

const viewsConfig = {
  "/index.html": {
    shared,
    title: "Home"
  },
  "/page.html": {
    shared,
    title: "Page"
  }
};

export { viewsConfig };
