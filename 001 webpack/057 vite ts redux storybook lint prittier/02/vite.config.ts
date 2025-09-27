import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      assets: resolve(__dirname, "src/assets"),
      components: resolve(__dirname, "src/components"),
      pages: resolve(__dirname, "src/pages"),
      store: resolve(__dirname, "src/store"),
      styles: resolve(__dirname, "src/styles"),
      svg: resolve(__dirname, "src/svg"),
      translate: resolve(__dirname, "src/translate"),
      utils: resolve(__dirname, "src/utils"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "styles/variables.scss" as *;
          @use "styles/breakpoints.scss" as *;
        `,
      },
    },
  },
});
