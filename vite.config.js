import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    vituum(),
    nunjucks({
      root: "./src",
    }),
  ],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
      "@scss/": `${__dirname}/src/styles/`,
      "@js/": `${__dirname}/src/scripts/`,
    },
  },
};
