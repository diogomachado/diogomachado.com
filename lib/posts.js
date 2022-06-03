import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://dev.diogomachado.com',
  key: '87d9e1ad21dd3738bee7edd1b3',
  version: 'v5.0',
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch(err => {
      console.error(err)
    })
}
