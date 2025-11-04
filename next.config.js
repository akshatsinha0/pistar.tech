/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com','www.uplers.com'],
    },
    webpack: (config, { isServer }) => {
        // Configure path aliases
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
            '@/assets': path.resolve(__dirname, 'public', 'assets'),
        };
        
        // Ensure proper module resolution
        config.resolve.modules = [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'public'),
            'node_modules',
        ];
        
        return config;
    },
}

module.exports = nextConfig
