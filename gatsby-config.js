
module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "advocasy-gatsby-project",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://44bb0565459c44428e76fd2b96514e81@o997824.ingest.sentry.io/5956154",
      }
    },
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
        src: "/Scripts.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /Svg-Icons/,
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
