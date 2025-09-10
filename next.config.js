const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          shop: `shop@https://remotea-z1jl.vercel.app/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        extraOptions: {
          skipSharingNextInternals: true,
        },
      })
    );
    return config;
  },
};
