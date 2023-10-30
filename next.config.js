
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'tse4.mm.bing.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'avatarfiles.alphacoders.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'tse1.mm.bing.net',
                port: '',
                pathname: '/**'
            }
        ],
    },
}

module.exports = nextConfig
