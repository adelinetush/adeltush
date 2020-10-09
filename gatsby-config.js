module.exports = {
  siteMetadata: {
    title: "Adeline Tushabe",
    author: "adelinetush"
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/posts/projects`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'played',
        path: `${__dirname}/src/posts/played`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
      ]
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Bubblegum Sans`,
        `Amatic SC`,
        `Andika`,
        `source sans pro\:300,400,400i,700` // 
      ],
      display: 'swap'
    }
  }
  ]
}
