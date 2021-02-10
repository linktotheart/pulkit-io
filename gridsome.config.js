// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pulkit',
  plugins: [
    {
      use: "gridsome-source-graphql-prismic",
      options: {
        url: "https://git-journal.prismic.io",
        fieldName: 'prismicio',
        typeName: 'prismicio',

        headers: { 
          'Prismic-Ref': `YCPWmBUAACQAsTY_`, // useMasterRef will overload this line
          'Authorization': `MC5ZQ1BZckJVQUFDTUFzVF96.77-9Minvv73vv73vv73vv70POO-_ve-_ve-_vQbvv73vv73vv70LFO-_ve-_ve-_vQMhZu-_vXTvv71tZO-_ve-_ve-_vQ`,
        },

        useMasterRef: true // undefined by default
      }
    }
  ]
}
