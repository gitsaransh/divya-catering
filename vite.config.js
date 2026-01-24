import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // Use relative base path so assets load correctly regardless of deployment root
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                testimonials: resolve(__dirname, 'testimonials.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
});
