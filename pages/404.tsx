import Head from 'next/head'
import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { styled } from '../stitches.config'
import Base from '../layouts/Coursepage'

function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found // Diogo Machado </title>
        <meta name="description" content="This page not exists" />
      </Head>

      <PlayerWrapper>
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_scqggbnw.json"
          style={{ height: '300px', width: '420px' }}
        ></Player>
      </PlayerWrapper>
    </>
  )
}

Custom404.getLayout = Base

export default Custom404

const PlayerWrapper = styled('div', {
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
})
