import type { AppProps } from 'next/app'
import CommandBar from '../components/CommandBar'
import 'remixicon/fonts/remixicon.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandBar>
      <Component {...pageProps} />
    </CommandBar>
  )
}

export default MyApp
