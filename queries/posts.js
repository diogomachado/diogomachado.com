const AllPosts = `
  query AllPosts {
    posts(orderBy: publishedAt_ASC) {
      id
      excerpt
      slug
      title
      date
      publishedAt
    }
  }
`

const SinglePost = `
  query SinglePost($slug: String!) {
    post(where: { slug: $slug }) {
      createdAt
      updatedAt
      publishedAt
      title
      slug
      date
      excerpt
      content {
        raw
        html
        markdown
        text
      }
      coverImage {
        url
        width
        height
      }
      author {
        ... on Author {
          remoteTypeName: __typename
          remoteId: id
          name
          title
          picture {
            url
            width
            height
          }
        }
      }


    }
  }
`

export { AllPosts, SinglePost }
