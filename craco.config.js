const CracoLessPlugin = require('craco-less')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 'primary-color': '#DA70D6' },
            javascriptEnabled: true,
          }
        }
      }
    }
  ],
  devServer: {
    host: 'localhost',
    //host: 'website.d.com',
    port: 3000
  }
}