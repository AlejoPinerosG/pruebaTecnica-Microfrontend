const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'users',
  filename: 'remoteEntry.js',
  exposes: {
    './UsuariosComponent': './projects/users/src/app/components/usuarios/usuarios.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
