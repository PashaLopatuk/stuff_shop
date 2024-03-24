/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.freeimages.com',
                port: '',
                pathname: '/variants/**',
            },
            {
                protocol: 'http',
                hostname: 'placeimg.com',
                port: '',
                pathname: '/640/480/**',
              },
            {
                protocol: 'https',
                hostname: 'placeimg.com',
                port: '',
                pathname: '/640/480/**',
            },
            {
                protocol: 'https',
                hostname: 'api.lorem.space',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'blogs.iadb.org',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
