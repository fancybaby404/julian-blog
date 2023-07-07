/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongoose"], // <-- and this
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    }
    // and the following to enable top-level await support for Webpack
    // webpack: (config) => {
    //     config.experiments = {
    //         topLevelAwait: true,
    //     };
    //     return config;
    // },
};

module.exports = nextConfig;
