/** @type {import('next').NextConfig} */
const nextConfig = {}
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    /* config for next-optimized-images */
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'], optimizeImagesInDev: false, responsive: {
        adapter: require('responsive-loader/sharp'),
    }, /* other next.js config options here */
});

module.exports = nextConfig
