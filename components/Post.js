import { styled } from '../stitches.config'

export const PostMain = styled('main', {
  '@bp2': { padding: '$navHeightDesktop 0' },
  padding: '$navHeightMobile 0',
  overflow: 'hidden',
  flex: '1 1',
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
