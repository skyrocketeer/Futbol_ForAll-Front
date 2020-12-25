import "@styles/tailwind.scss"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import App from 'next/app'
import type { AppProps, AppContext, AppInitialProps } from 'next/app'
import type { IncomingMessage } from 'http'

import cookie from 'cookie'
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr'
import { Cookies } from "@types"

const keycloakConfig = {
  url: process.env.NEXT_PUBLIC_AUTH_SERVER_DOMAIN || '',
  realm: process.env.NEXT_PUBLIC_AUTH_SERVER_REALM || '',
  clientId: process.env.NEXT_PUBLIC_AUTH_SERVER_CLIENT_ID || '',
  redirectUri: process.env.NEXT_FRONT_DOMAIN || '',
}

function MyApp({ Component, pageProps, cookies }: AppProps & AppInitialProps & Cookies) {
  return(
    <SSRKeycloakProvider
      keycloakConfig={keycloakConfig}
      persistor={SSRCookies(cookies)}
      initOptions={{'pkceMethod': 'S256'}}
    >
      <Component {...pageProps} /> 
    </SSRKeycloakProvider>
  )
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  // Extract cookies from AppContext
  return {
    ...appProps,
    cookies: parseCookies(appContext?.ctx?.req),
  }
}

export default MyApp
