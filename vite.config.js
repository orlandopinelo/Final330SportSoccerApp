import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        statistics: resolve(__dirname, "src/statistics/index.html"),
        teams: resolve(__dirname, "src/teams/index.html"),
        product3: resolve(__dirname, "src/statistics/northface-alpine-3.html"),
        product4: resolve(__dirname, "src/statistics/northface-talus-4.html"),
      },
    },
  },
});
