import { getPosts } from '../lib/posts'

import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Base from '../layouts/Base'
import { styled } from '../stitches.config'
import BlogDate from '../components/BlogDate'

type PropsArticleItem = {
  id: string
  title: string
  published_at: string
  slug: string
}

type PropsArticle = {
  posts: PropsArticleItem[]
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
              <BlogDate dateString={post.published_at} />
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
