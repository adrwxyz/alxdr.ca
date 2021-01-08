require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `ALXDR`,
    // Default title of the page
    siteTitleAlt: `ALXDR`,
    // Can be used for e.g. JSONLD
    siteHeadline: `ALXDR`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://alxdr.ca`,
    // Used for SEO
    siteDescription: `ALXDR`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/img/logos/h.png`,
    // Twitter Handle
    author: `ALXDR`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        // Date format
        formatString: "YYYY-MM-DD",
        navigation: [
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
        ],
        externalLinks: [
          // {
          //   name: `Twitter`,
          //   url: `https://twitter.com/lekoarts_de`,
          // },
        ],
        // Title for RSS feed
        feedTitle: `ALXDR`
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "6",
        matomoUrl: "https://matomo.adrw.xyz",
        siteUrl: "https://alxdr.ca"
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
