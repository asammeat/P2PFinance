/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
compiler: {
    styledComponents: true,
},
images: { domains: ['lh3.googleusercontent.com'], formats: ['image/avif', 'image/webp'], }, 
}

module.exports = nextConfig
