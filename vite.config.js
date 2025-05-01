import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import pages from './pages.config.js';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import fullReload from 'vite-plugin-full-reload';
import imagemin from 'vite-plugin-imagemin';
import { convertImages } from './convertImages';

const publicImagesDir = path.resolve(__dirname, 'src/img');
const outputImagesDir = path.resolve(__dirname, 'src/img');
convertImages(publicImagesDir, outputImagesDir);

const pagesInput = {};
pages.forEach(page => {
    pagesInput[page.name] = page.path;
});

export default defineConfig({
    base: '/',
    build: {
        target: 'es2022',
        outDir: 'build',
        assetsDir: 'assets',
        cssCodeSplit: true,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
            mangle: {
                properties: {
                    regex: /^_/,
                },
            },
        },
        rollupOptions: {
            input: {
                ...pagesInput,
            },
            plugins: [
                terser({
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                    mangle: true,
                }),
            ],
        },
    },
    server: {
        port: 3025,
        host: 'localhost',
        hmr: true,
    },
    plugins: [
        handlebars({
            partialDirectory: path.resolve(__dirname, 'src/partials'),
            inject: {
                data: {
                    modifikator: 'classname1',
                },
            },
            watch: path.resolve(__dirname, 'src/partials'),
        }),
        fullReload('./**/*', { delay: 0 }),

        imagemin({
            gifsicle: { optimizationLevel: 3 },
            optipng: { optimizationLevel: 7 },
            mozjpeg: { quality: 85 },
            webp: { quality: 85 },
        }),
    ],
});
