require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Caswell Construction',
    description: `Husband and wife home remodelling team serving Norfolk County and surrounding areas.`,
    phone: `226-206-0546`,
    email: `caswellconstruction03@gmail.com`,
    siteUrl: `https://www.caswellconstruction.ca`,
    copyright: 2021,
    keywords: ``,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
