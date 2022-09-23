import {NextAdapter} from 'next-query-params';
import {QueryParamProvider} from 'use-query-params';
import '../styles/index.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <Component {...pageProps} />
    </QueryParamProvider>
  )
}

export default MyApp
