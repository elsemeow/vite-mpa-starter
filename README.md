# Game of Life

## How to start

### Serverless

In the `/serverless` directory there is a version to run without a server, just run `index.html` file from there.

### Via Vite

Installing dependencies

```
npm install
```

Start dev server, aliases: vite dev, vite serve

```
npm run dev
```

or build for production (creates /dist)

```
npm run build
```

and run locally preview production build

```
npm run preview
```

## Game states

### 1. Grid setup

Use the sliders to set the width and height of the playing field. The default grid sizes are from `1x1` to `1000x1000` elements. Once the desired values are selected, click "Create Grid".

### 2. Drawing

In this state, 4 types of tools are available to you:

- "Pencil" - draws cells on the grid with the mouse;
- "Eraser" - erases the cells on the grid with the mouse;
- "Panorama" - control the camera, to do this, hold down the left mouse button and move the mouse in any direction;
- "Clear" - completely clears the grid.

In the lower right corner is information about the current state of the game.

- "Pos" - current screen center position;
- "Scale" - current screen zoom (`100%` by default);
- "Speed" - current game speed (`10` by default).

To control the game speed (from `0 FPS` to `60 FPS` by default), use the keyboard. Press `[Right Arrow]` to increase speed, press `[Left Arrow]` to decrease speed.

Use the keyboard to control zoom (from `25%` to `150%` by default). `[=]` or `[+]` to zoom in. `[-]` or `[_]` to zoom out.

After the desired figures are drawn on the field, click "Run".

### 3. Run

While the game is running, you can control the camera, zoom and game speed.

When you click on "Reset" the state of the game returns to the first generation.

To return to the "Grid setup" state, reload the page.
