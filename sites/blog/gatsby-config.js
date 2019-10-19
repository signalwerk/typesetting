module.exports = {
  // pathPrefix: `/typesetting`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Typesetting Blog',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
  },
};
