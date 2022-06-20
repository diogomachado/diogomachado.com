import { styled } from '../stitches.config'

export const PostMain = styled('main', {
  '@bp2': {
    padding: '$navHeightDesktop 0',
    flex: '1 1',
    flexDirection: 'column',
  },
  padding: '$navHeightMobile 0',
  overflow: 'hidden',
  flexDirection: 'column-reverse',
})

export const Post = styled('main', {
  overflow: 'hidden',
  flex: '1 1',
})

export const PostContainer = styled('div', {
  margin: '0 auto',
  maxWidth: '760px',
  padding: '0 20px',
})

// Review if this is the best way to do this
export const PostContent = styled('div', {
  fontSize: '16px',
  lineHeight: '32px',
  color: '$secondary',
  background: '$background',
  position: 'relative',
  zIndex: 1,
  height: '100%',
  padding: '100px 0',
})
