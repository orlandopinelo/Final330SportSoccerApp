import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        statistics: resolve(__dirname, "src/statistics/index.html"),
        teams: resolve(__dirname, "src/teams/index.html"),
        fixture: resolve(__dirname, "src/fixture/index.html"),
        player: resolve(__dirname, "src/player/index.html"),
      },
    },
  },
});
