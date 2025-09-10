const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          shop: 'shop@https://remotea-z1jl.vercel.app/_next/static/chunks/remoteEntry.js',
        },
        extraOptions: {
          skipSharingNextInternals: true,
        },
      })
    );
    return config;
  },
};
