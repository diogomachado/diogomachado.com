import { GetStaticProps } from 'next/types'
import { getSinglePost, getPosts } from '../../lib/posts'
import Blogpost from '../../layouts/Blogpost'
import Head from 'next/head'
import BlogDate from '../../components/BlogDate'
import { styled } from '../../stitches.config'

interface PropsGhostPost {
  post: Post
}

interface Post {
  title: string
  excerpt: string
  slug: string
  html: string
  canonical_url: string
  published_at: string
}

// PostPage page component
const PostPage = (props: PropsGhostPost) => {
  // Render post title and content in the page from props
  return (
    <>
      <Head>
        <title>
          {props.post.title} {`//`} Diogo Machado
        </title>
        <meta content={props.post.title} property="og:title" />
        <meta content={props.post.excerpt} name="description" />
        <link rel="icon" href="/favicon.png" />

        {props.post.canonical_url && (
          <link rel="canonical" href={props.post.canonical_url} />
        )}
      </Head>

      <BlogDate dateString={props.post.published_at} />

      <PostTitle>{props.post.title}</PostTitle>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export const getStaticProps: GetStaticProps = async (context: any) => {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post },
  }
}

PostPage.getLayout = Blogpost

export default PostPage

const PostTitle = styled('h1', {
  lineHeight: '1.2em',
  marginBottom: '32px',
})
