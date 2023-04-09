/**Wrapping the components {..pageProps}
 * in Layout from Layout.js in components
 * This way we can reuse the Header and NavBar on every page without 
 * coding one for every single page.
 */

import Layout from '../components/Layout'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
export default function App({ Component, pageProps }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  return <>
    <Layout>
    <GoogleAnalytics measurementId={measurementId}/>
    <Component {...pageProps}/>
    </Layout>
  </>
}
