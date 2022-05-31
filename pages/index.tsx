import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import developerGuy from '../public/static/img/developer-guy.png'
import { styled } from '../stitches.config'
import { Wrapper } from '../components/Wrapper'
import { PostMain } from '../components/Post'
import { ButtonCommand } from '../components/ButtonCommand'

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
                180deg, 
                rgba(67, 156, 251, 0.69) 0%, 
                rgba(241, 135, 251, 0.2553) 84.9%
              );`,
            }}
          >
            Diogo Machado
          </GradientTitle>
          <DescriptionMain>
            Senior Frontend Engineer with 10+ experience building amazing
            products for web.
          </DescriptionMain>
          <ButtonCommand />
        </AboutContainer>
        <Image
          layout="intrinsic"
          width={455}
          height={593}
          src={developerGuy}
          alt="Developer Guy"
        />
      </HomeContainer>
    </Wrapper>
  )
}

const DescriptionMain = styled('p', {
  lineHeight: '28px',
  letterSpacing: '-0.04em',
})

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

export default Home
