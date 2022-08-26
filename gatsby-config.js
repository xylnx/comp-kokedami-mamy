module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kokedami Mamy`,
        short_name: `Kokedami Mamy`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#007229`,
        display: `standalone`,
        icon: `src/assets/img/illustration-duznatka.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about-us/`, `/projects/*`],
      },
    },
  ],

  siteMetadata: {
    title: "Kokedami Mamy",
    description: "the best kokedamas in town",
    copyright: "Kokedami Mamy 2022",
  },
}
