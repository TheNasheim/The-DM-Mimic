/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            makeAbsoluteExternalsRelative: false,
            input: {
                "the-dm-mimic": resolve(
                    __dirname,
                    "index.html"
                ),
            },
            output: {
                globals: {
                    "DMMimic.json": "applicationDMTextItems",
                },
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            },
        },
        sourcemap: true,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
        dedupe: ["vue", "moment"],
    },
})
