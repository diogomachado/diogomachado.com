import { AllPosts } from '../queries/posts'

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

  console.log(allPosts.data)

  return allPosts.data.posts
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch(err => {
      console.error(err)
    })
}
