import { getPosts } from '../lib/posts'

import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import Base from '../layouts/Base'

type PropsArticleItem = {
  id: string
  title: string
}

type PropsArticle = {
  posts: PropsArticleItem[]
}

const Articles: NextPage<PropsArticle> = props => {
  return (
    <>
      <Head>
        <title>Articles // Diogo Machado </title>
        <meta
          name="description"
          content="Frontend Engineer with 10+ experience building amazing products for web."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ul>
        {props.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
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

Articles.getLayout = Base

export default Articles
