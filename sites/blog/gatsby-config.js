module.exports = {
  pathPrefix: `/typesetting`,

  __experimentalThemes: [
    [
      "gatsby-theme-signalwerk",
      {
        root: __dirname,
      }
    ]
  ],

  siteMetadata: {
    title: 'Typesetting Blog',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
  },
};
