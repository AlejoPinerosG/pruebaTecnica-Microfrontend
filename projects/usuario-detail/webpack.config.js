const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'usuarioDetail',
  filename: 'remoteEntry.js',
  exposes: {
    './usuariosDetailComponent':'./projects/usuario-detail/src/app/components/usuariosDetail/usuariosDetail.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
