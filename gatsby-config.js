
module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "advocasy-gatsby-project",
  },
  plugins: [
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://44bb0565459c44428e76fd2b96514e81@o997824.ingest.sentry.io/5956154",
        sampleRate: 0.7,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/test-script.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /octicons/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
  ],
}
