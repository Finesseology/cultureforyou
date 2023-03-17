/**Wrapping the components {..pageProps}
 * in Layout from Layout.js in components
 * This way we can reuse the Header and NavBar on every page without 
 * coding one for every single page.
 */

import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {

  return <>
    <Layout>
    <Component {...pageProps}/>
    </Layout>
  </>
}
