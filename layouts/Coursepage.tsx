import Navbar from '../components/NavBar'
import { Wrapper } from '../components/Wrapper'
import { styled } from '../stitches.config'

export default function CoursePage({ children }: any) {
  return (
    <Wrapper>
      <Navbar />
      <CourseWrapper>{children}</CourseWrapper>
    </Wrapper>
  )
}

const CourseWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
})
