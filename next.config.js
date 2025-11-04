/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com','www.uplers.com'],
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
            '@/assets': path.resolve(__dirname, 'public/assets'),
        };
        return config;
    },
}

module.exports = nextConfig
