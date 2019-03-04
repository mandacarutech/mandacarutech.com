module.exports = {
  siteMetadata: {
    title: `Mandacaru Technologies`,
    description: `Mandacaru Technologies`,
    author: `@pragmaticivan`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mandacaru Technologies`,
        short_name: `Mandacaru Technologies`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#5C4B77`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#43375b`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135546199-1",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
