module.exports = {
  siteMetadata: {
    title: `Breadman`,
    description: `Agencia`,
    author: `@taylorbryant`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Breadman`,
        short_name: `Breadman`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open+Sans:300,400,600,700,800`,
          `Raleway:300,400,500,600,700,900`,
        ],
        display: 'swap',
      },
    },
  ],
}
