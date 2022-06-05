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
      yellow: 'rgba(255, 255, 0, 0.69)',
      pink: 'rgba(255, 0, 255, 0.69)',
      background: '#11001C',
      secondary: '#F5F5F5',
      textColor: 'rgba(255, 255, 255, 0.38)',
      hover: '#212024',
      command: 'rgba(255, 255, 255, 0.05)',
    },
    transitions: {
      duration: '0.2s',
    },
    radii: {
      borderRadius: '8px',
    },
    space: {
      navHeightDesktop: '60px',
      navHeightMobile: '50px',
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
  a: {
    borderBottom: '1px solid $primary',
    color: '$primary',
    textDecoration: 'none',
    transition: 'opacity $duration ease-in-out',
  },
  'a:hover, a:focus': {
    opacity: '0.8',
  },
  figure: {
    margin: '0',
  },
  img: {
    maxWidth: '100%',
  },
  code: {
    background: '#151417',
    borderRadius: '$borderRadius',
    color: '$primary',
    fontFamily: '$code',
    fontSize: '15px',
  },
  ':not(pre) > code': {
    padding: '4px',
  },
  blockquote: {
    borderLeft: '4px solid $hover',
    color: '$secondary',
    fontStyle: 'italic',
    margin: '0',
    paddingLeft: '20px',
  },
  iframe: {
    width: '100%',
    minHeight: '480px',
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
