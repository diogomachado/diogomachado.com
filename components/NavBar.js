import { styled } from '../stitches.config'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useKBar } from 'kbar'

export default function Navbar() {
  const router = useRouter()
  const pages = [
    {
      title: 'Articles',
      icon: 'ri-article-line',
    },
    {
      title: 'Courses',
      icon: 'ri-book-open-line',
    },
  ]
  const [hovered, setHovered] = useState('')
  const { query } = useKBar()

  return (
    <AnimateSharedLayout>
      <Header>
        <Link href="/" passHref>
          <ButtonLogo as="a">D</ButtonLogo>
        </Link>

        <Nav>
          <List>
            {pages.map(page => {
              const path = `/${page.title.toLowerCase()}`
              const isHovered = hovered === page.title

              return (
                <li key={page.title}>
                  <Link href={path} passHref>
                    <Anchor>
                      <NavContainer
                        onHoverStart={() => setHovered(page.title)}
                        onHoverEnd={() => setHovered('')}
                        css={
                          router.pathname == path
                            ? {
                                color: '$primary',
                                '&::after': { opacity: 1 },
                              }
                            : ''
                        }
                      >
                        {isHovered && (
                          <NavHovered
                            layoutId="nav"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        <Icon
                          style={{ marginRight: '12px' }}
                          className={page.icon}
                        />
                        {page.title}
                      </NavContainer>
                    </Anchor>
                  </Link>
                </li>
              )
            })}
          </List>
        </Nav>

        <Aside>
          <ButtonHeader
            as="button"
            type="button"
            aria-label="Command"
            onClick={query.toggle}
            css={{ padding: '0 8px' }}
          >
            <Icon className="ri-command-line" />
          </ButtonHeader>
        </Aside>
      </Header>
    </AnimateSharedLayout>
  )
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontSize: '12px',
  minHeight: '59px',
  width: '100%',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '0',
  zIndex: 3,
  marginTop: '13px',
  '@bp2': { marginTop: '0' },
})

const List = styled('ul', {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'inline-flex',
  position: 'relative',
  top: '5px',
  '@bp1': { justifyContent: 'space-around' },
})

const ButtonHeader = styled('div', {
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$borderRadius',
  color: 'white',
  cursor: 'pointer',
  height: '34px',
  padding: '0 10px',
  transition: 'background $duration ease-in-out',
  '&:hover': { background: '$hover' },
})

const Icon = styled('i', {
  fontSize: '24px',
  lineHeight: '32px',
})

const ButtonLogo = styled(ButtonHeader, {
  fontWeight: 700,
  fontSize: '26px',
  textDecoration: 'none',
  marginLeft: '12px',
  fontFamily: '$heading',
})

const Nav = styled('nav', {
  textAlign: 'center',
  flex: 1,
  order: 2,
  flexBasis: '100%',
  '@bp2': { order: 0, flexBasis: 'initial' },
  '@bp3': { overflowX: 'scroll', overflowY: 'hidden' },
})

const Aside = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingRight: '12px',
  marginLeft: 'auto',
})

const Anchor = styled('a', {
  border: 0,
  position: 'relative',
  '&:hover, &:focus': { opacity: 1, color: 'white' },
})

const NavContainer = styled(motion.span, {
  color: '$textColor',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: 500,
  padding: '20px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'color $duration ease-in-out',
  '&:hover': {
    color: '$primary',
  },
})

const NavHovered = styled(motion.span, {
  position: 'absolute',
  top: '-19px',
  left: '0',
  right: '0',
  background: '$hover',
  padding: 20,
  borderRadius: '$borderRadius',
  zIndex: -1,
})
