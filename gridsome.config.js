// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pulkit',
  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: '847f0358846af3f2f4f3f8e098fb05', // required
        previewMode: true,
        apiUrl: 'https://site-api.datocms.com',
        typeName: 'DatoCms'
      }
    }
  ]
}
