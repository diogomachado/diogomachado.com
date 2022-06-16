import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import developerGuy from '../public/static/img/developer-guy.png'
import { styled } from '../stitches.config'
import { Wrapper } from '../components/Wrapper'
import { PostMain } from '../components/Post'
import { ButtonCommand } from '../components/ButtonCommand'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Diogo Machado </title>
        <meta
          name="description"
          content="Frontend Engineer with 10+ experience building amazing products for web."
        />
      </Head>

      <NavBar />

      <HomeContainer>
        <AboutContainer>
          <GradientTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: 'tween',
            }}
            css={{
              backgroundImage: `linear-gradient(
                180deg, 
                $blue 0%, 
                $purple 84.9%
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

        <ImageWrapper
          animate={{ y: 20 }}
          transition={{ type: 'spring', stiffness: 20 }}
        >
          <Image layout="responsive" src={developerGuy} alt="Developer Guy" />
        </ImageWrapper>
      </HomeContainer>
    </Wrapper>
  )
}

const ImageWrapper = styled(motion.div, {
  position: 'relative',
  width: '85%',
  '@bp2': {
    width: '50%',
  },
})

const DescriptionMain = styled('p', {
  lineHeight: '28px',
  letterSpacing: '-0.04em',
})

const GradientTitle = styled(motion.h1, {
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
  padding: '12px',
  '@bp3': { flexBasis: '42%' },
})

const HomeContainer = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 980, flexDirection: 'row' },
})

export default Home
