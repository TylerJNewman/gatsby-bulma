module.exports = {
  siteMetadata: {
    title: 'Cannabuny',
    author: 'Illiana LaFayette',
    imageUrl: 'https://i.imgur.com/Vz81GEl.png',
    description:
      'Cannabunny is a sustainably-made line of natural products that offer the full benefits of cannabis and avoids toxins that root from pharmaceutical drugs. We donate to women’s rehabilitation centers, animal sanctuaries, and low-income support networks. Our core purpose is to create a safe environment that is safe and trusted.',
    keywords: 'cbd, cannabunny, shop',
    instagram: 'https://instagram.com/cannabunnyco',
    facebook: 'https://facebook.com/cannabunnyco',
    twitter: 'https://twitter.com/cannabunnyco',
    siteUrl: 'https://www.cannabunny.co'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Makefolio',
        short_name: 'Makefolio',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png',
        orientation: 'portrait'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-XXXXXXXX-X',
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    'gatsby-plugin-sitemap'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
