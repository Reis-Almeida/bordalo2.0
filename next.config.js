const optimizedImages  = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
    [optimizedImages, {

    }],
    {
        images: {
            deviceSize: [320, 640, 768, 1024, 1600],
            domains: ['storage.allmatech.com.br']
        },
        typescript: {
            // !! WARN !!
            // Dangerously allow production builds to successfully complete even if
            // your project has type errors.
            // !! WARN !!
            ignoreBuildErrors: true,
        },
        eslint: {
            // Warning: This allows production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        }
    },
    
]);
