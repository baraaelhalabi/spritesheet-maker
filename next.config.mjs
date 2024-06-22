/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.ko-fi.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
