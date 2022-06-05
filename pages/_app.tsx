import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import CommandBar from '../components/CommandBar'
import 'remixicon/fonts/remixicon.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Noop = ({ children }: any) => children

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const Layout = Component.getLayout || Noop

  return (
    <>
      <CommandBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CommandBar>
    </>
  )
}
