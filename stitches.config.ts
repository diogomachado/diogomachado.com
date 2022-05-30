import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      background: '#11001C',
      textColor: 'rgba(255, 255, 255, 0.38)',
    },
    fonts: {
      body: 'JetBrains Mono, monospace;',
    },
  },
  media: {
    bp1: '(min-width: 425px)',
    bp2: '(min-width: 760px)',
    bp3: '(max-width: 780px)',
    bp4: '(max-width: 1024px)',
  },
  utils: {},
})

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body',
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    background: '$background',
  },
  h1: {
    fontFamily: 'JetBrains Mono ExtraBold, monospace;',
    color: '$white',
    fontSize: '50px',
    margin: '0px',
  },
  p: {
    color: '$textColor',
  },
  '@font-face': [
    {
      fontFamily: 'JetBrains Mono',
      src: `url("/static/font/JetBrainsMono-Regular.ttf") format("truetype")`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'JetBrains Mono ExtraBold',
      src: `url("/static/font/JetBrainsMono-ExtraBold.ttf") format("truetype")`,
      fontWeight: 'normal',
      fontStyle: 'bold',
    },
  ],
})

globalStyles()
