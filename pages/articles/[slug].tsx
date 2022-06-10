import { GetStaticProps } from 'next/types'
import { ArticleJsonLd } from 'next-seo'
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
  canonical_url: string
  feature_image: string
  slug?: string
  html?: string
  published_at: string
  updated_at: string
}

// PostPage page component
const PostPage = (props: PropsGhostPost) => {
  const seo: Post = {
    title: `${props.post.title} // Diogo Machado`,
    excerpt: props.post.excerpt || '',
    canonical_url: `https://diogomachado.com/articles/${props.post.slug}`,
    feature_image: props.post.feature_image,
    published_at: props.post.published_at,
    updated_at: props.post.updated_at,
  }

  // Render post title and content in the page from props
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta content={seo.title} property="og:title" />
        <meta content={seo.excerpt} name="description" />
        <meta content={seo.excerpt} property="og:description" />
        <meta content={seo.canonical_url} property="og:url" />
        <meta content={seo.feature_image} property="og:image" />

        <ArticleJsonLd
          authorName="Diogo Machado"
          type="Blog"
          url={seo.canonical_url}
          title={seo.title}
          images={[seo.feature_image]}
          datePublished={seo.published_at}
          dateModified={seo.updated_at}
          description={seo.excerpt}
        />

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
