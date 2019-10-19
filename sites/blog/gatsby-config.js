module.exports = {
  // pathPrefix: `/`,

  __experimentalThemes: [
    {
      resolve: "gatsby-theme-signalwerk",
      options: {
        root: __dirname
      }
    }
  ],

  siteMetadata: {
    title: "Typesetting Blog",
    author: "Stefan Huber",
    authorUrl: "http://signalwerk.ch/",
    description: "Some experiments in typesetting ",
    siteUrl: "https://typesetting.signalwerk.ch"
  }
};
