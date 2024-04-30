import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  plugins: [vituum(), nunjucks()],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
};
