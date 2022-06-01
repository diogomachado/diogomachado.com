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
      blue: 'rgba(67, 156, 251, 0.69)',
      purple: 'rgba(241, 135, 251, 0.2553)',
      background: '#11001C',
      secondary: '#F5F5F5',
      textColor: 'rgba(255, 255, 255, 0.38)',
      hover: '#212024',
      command: 'rgba(255, 255, 255, 0.05)',
    },
    transitions: {
      duration: '0.2s',
    },
    space: {
      navHeightDesktop: '60px',
      navHeightMobile: '0px',
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
  kbd: {
    color: '$background',
    background: '$secondary',
    padding: '1px 5px',
    borderRadius: '4px',
    transition: 'background $duration ease-in-out',
    fontFamily: '$code',
    fontSize: '14px',
  },
  h1: {
    fontFamily: 'JetBrains Mono ExtraBold, monospace;',
    color: '$white',
    fontSize: '40px',
    margin: '0px',
    '@bp2': { fontSize: '50px' },
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
