import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/divya-catering/',
    publicDir: 'public', // Ensure public folder is copied to dist
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
        // Copy assets properly
        assetsInlineLimit: 0,
    },
});
