This is a fast, responsive web site built using a static site
generator, GatsbyJS. This allowed me to achieve fast load times and
fully customize the site.

In order to allow the site owner to update the content of the site, I implemented a
headless CMS, Prismic. This was made easier by using a Gatsby-Prismic starter, [Prist](https://github.com/margueriteroth/gatsby-prismic-starter-prist). Once I had the CMS set up, I created my own content types and pages and brought those in using the Gatsby plugin and GraphQL to query the data when needed. Information from a daily surf report is also being brought in from an external API. These two data sources are brought in by Gatsby and the whole site is compiled into static HTML, CSS and Javascript files, allowing for quick load times.


[![Netlify Status](https://api.netlify.com/api/v1/badges/b7a0e871-c5fd-4a82-9651-7df7a787400e/deploy-status)](https://app.netlify.com/sites/cowells-prismic/deploys)
