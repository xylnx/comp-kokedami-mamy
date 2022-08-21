module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
  ],

  siteMetadata: {
    title: "Kokedami Mamy",
    description: "the best kokedamas in town",
    copyright: "Kokedami Mamy 2022",
  },
}
