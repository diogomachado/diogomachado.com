import { AllPosts, SinglePost } from '../queries/posts'

export async function getPosts() {
  const allPosts = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: AllPosts,
    }),
  }).then(res => res.json())

  return allPosts.data.posts
}

export async function getSinglePost(slug) {
  const { post } = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: SinglePost,
      variables: { slug: slug },
    }),
  })
    .then(res => res.json())
    .then(res => res.data)
  return post
}
