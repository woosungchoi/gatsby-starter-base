require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Woosung Reflex",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        contentPath: "content/posts",
        basePath: "/blog",
        postsPerPage: 4,
        pageQuery: null,
        slugResolver: null,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Woosung Choi`,
        short_name: `Woosung`,
        start_url: `/`,
        background_color: `#191924`,
        theme_color: `#fee440`,
        display: `standalone`,
        icon: `content/images/woosung.png`,
      },
    },
    {
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        global: {
          title: "Woosung Choi",
          description: "Wildlife Photographer and Storyteller.",
          image: "woosung.png",
        },
        types: [
          `Page`,
          `Post`,
          {
            type: `PostTag`,
            defaults: {
              title: (tag) => tag.name,
              description: (tag) => `Posts tagged under ${tag.name}.`,
            },
          },
        ],
        paths: [
          {
            pathname: `/blog{,/**}`,
            defaults: {
              title: `Woosung Blog`,
            },
          },
        ],
      },
    },
  ],
}
