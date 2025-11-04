/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com','www.uplers.com'],
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.join(__dirname, 'src'),
            '@/assets': path.join(__dirname, 'public', 'assets'),
            '@/components': path.join(__dirname, 'src', 'components'),
        };
        return config;
    },
}

module.exports = nextConfig
