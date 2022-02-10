import React, { useReducer, createContext } from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import Store from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  )
}

export const Context = createContext({});
export default MyApp;