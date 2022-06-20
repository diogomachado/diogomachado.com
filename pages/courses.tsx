import type { NextPage } from 'next'
import Head from 'next/head'
import Base from '../layouts/Base'
import { styled } from '../stitches.config'
import { motion } from 'framer-motion'

const Courses: NextPage<any> = props => {
  const animationCustom = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <>
      <Head>
        <title>Courses // Diogo Machado </title>
        <meta
          name="description"
          content="Specialized online courses by Diogo Machado. HTML, CSS, Figma"
        />
      </Head>

      <CoursesWrapper
        initial="hidden"
        animate="visible"
        variants={animationCustom}
        transition={{ duration: 0.5 }}
      >
        <Course
          href="https://imersaocss.com/"
          target="_blank"
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.75)',
          }}
        >
          <CourseIcon className="ri-link"></CourseIcon>
          <CourseTitle
            css={{
              backgroundImage:
                'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%);',
            }}
          >
            Imersão CSS
          </CourseTitle>
          <CourseDescription>Advanced online course of CSS</CourseDescription>
        </Course>
        <Course
          href="https://www.udemy.com/course/como-usar-software-figma-para-prototipos/?referralCode=96B41CB0D19DCDE10FE1"
          target="_blank"
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.75)',
          }}
        >
          <CourseIcon className="ri-link"></CourseIcon>
          <CourseTitle
            css={{
              backgroundImage:
                'linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)',
            }}
          >
            Figma
          </CourseTitle>
          <CourseDescription>Learn Figma with a Netflix app</CourseDescription>
        </Course>
      </CoursesWrapper>
    </>
  )
}

const CoursesWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  '@bp2': {
    flexDirection: 'row',
  },
})

const Course = styled(motion.a, {
  position: 'relative',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  height: '360px',
  backgroundSize: 'contain',
  borderRadius: '12px',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '24px 32px 62px 32px',
  '&:hover, &:focus': {
    background: 'rgba(0, 0, 0, 0.85)',
  },
  '@bp2': {
    height: '500px',
    flexBasis: '50%',
  },
})

const CourseTitle = styled('h2', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
  fontSize: '2.25rem',
  margin: '0',
  fontFamily: '"Raleway Black Italic", sans-serif',
  paddingBottom: '12px',
})

const CourseIcon = styled('i', {
  position: 'absolute',
  top: '26px',
  right: '26px',
  fontSize: '24px',
  color: 'rgba(255, 255, 255, 0.25)',
  '@bp2': {
    fontSize: '42px',
  },
})

const CourseDescription = styled('p', {
  fontSize: '20px',
  margin: '0',
  color: 'rgba(255, 255, 255, 0.95)',
  fontFamily: '"Raleway Extralight", sans-serif',
})

Courses.getLayout = Base

export default Courses
