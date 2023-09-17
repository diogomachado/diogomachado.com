import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import BlogDate from '../components/BlogDate'
import Base from '../layouts/Base'
import { getPosts } from '../lib/posts'
import { styled } from '../stitches.config'

type Post = {
  id: string
  title: string
  excerpt?: string
  date: string
  publishedAt: string
  slug: string
}

type PropsArticle = {
  posts: Post[]
}

const Articles: NextPage<PropsArticle> = props => {
  return (
    <>
      <Head>
        <title>Articles // Diogo Machado </title>
        <meta name="description" content="Articles written by Diogo Machado" />
      </Head>

      <div>
        {props.posts.map(post => (
          <ArticleItem key={post.id} href={`articles/${post.slug}`}>
            <ArticlePublishedAt>
              <BlogDate dateString={post.date} />
            </ArticlePublishedAt>
            <ArticleTitle>{post.title}</ArticleTitle>
          </ArticleItem>
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tagline: 'Code. Thoughts.',
      primaryColor: 'yellow',
      secondaryColor: 'pink',
      posts,
    },
  }
}

const ArticlePublishedAt = styled('div', {
  fontSize: '0.8rem',
})

const ArticleItem = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  padding: '18px 0',
  cursor: 'pointer',
  borderBottom: '1px solid #333',
})

const ArticleTitle = styled('h1', {
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '0',
  color: '$textColor',
})

Articles.getLayout = Base
export default Articles
