import { styled } from '../stitches.config'
import { useKBar } from 'kbar'
import { useEffect, useState } from 'react'

export function ButtonCommand() {
  const { query } = useKBar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <ButtonWrapper as="button" onClick={query.toggle}>
          Tap to start →
        </ButtonWrapper>
      )
    } else if (isMac) {
      return (
        <ButtonWrapper as="button" onClick={query.toggle}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </ButtonWrapper>
      )
    } else {
      return (
        <ButtonWrapper as="button" onClick={query.toggle}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonWrapper>
      )
    }
  }
}

export const ButtonWrapper = styled('button', {
  outline: 'none',
  background: 'none',
  border: 'none',
  color: '$white',
  marginRight: 'auto',
  padding: '12px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: [
    'background $duration ease-in-out',
    'color $duration ease-in-out',
  ],
  '&:hover': { background: '$hover', color: '$white', opacity: 1 },
  '&:hover kbd': { background: '$white' },
})
