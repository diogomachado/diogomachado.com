import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import developerGuy from '../public/static/img/developer-guy.png'
import { styled } from '../stitches.config'
import { Wrapper } from '../components/Wrapper'
import { PostMain } from '../components/Post'
import { KBarProvider } from 'kbar'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Diogo Machado </title>
        <meta
          name="description"
          content="Frontend Engineer with 10+ experience building amazing products for web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer>
        <AboutContainer>
          <GradientTitle
            css={{
              backgroundImage: `linear-gradient(
                135deg,
                #0061ff 0%,
                #60efff 100%
              );`,
            }}
          >
            Diogo Machado
          </GradientTitle>
          <p>
            Frontend Engineer with 10+ experience building amazing products for
            web.
          </p>
          <ButtonCommand>Press here to start</ButtonCommand>
        </AboutContainer>
        <Image
          layout="intrinsic"
          width={593}
          height={593}
          src={developerGuy}
          alt="Developer Guy"
        />
      </HomeContainer>
    </Wrapper>
  )
}

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
})

const AboutContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '42%',
})

const HomeContainer = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 980 },
})

const ButtonCommand = styled('button', {
  backgroundColor: 'blue',
})

export default Home
