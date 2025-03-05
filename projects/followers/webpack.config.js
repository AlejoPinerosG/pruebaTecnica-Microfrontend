const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'followers',
  filename: 'remoteEntry.js',
  exposes: {
    './followersComponent': './projects/followers/src/app/components/followers/followers.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
