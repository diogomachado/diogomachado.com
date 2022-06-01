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
