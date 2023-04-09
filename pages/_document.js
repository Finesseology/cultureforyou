import { Html, Head, Main, NextScript } from 'next/document'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
export default function Document() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  return (
    <Html lang="en">
      <Head />
      <GoogleAnalytics measurementId={measurementId}/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
