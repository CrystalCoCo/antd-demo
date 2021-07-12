const CracoLessPlugin = require('craco-less')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          }
        }
      }
    }
  ],
  devServer: {
    //host: 'localhost',
    host: 'website.d.com',
    port: 3000
  }
}