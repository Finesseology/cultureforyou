/**Wrapping the components {..pageProps}
 * in Layout from Layout.js in components
 * This way we can reuse the Header and NavBar on every page without
 * coding one for every single page.
 */

import Layout from "../components/layout";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
	const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
	return (
		<>
			<GoogleAnalytics measurementId={measurementId} />
			<SessionProvider session={session}>
				{Component.auth ? (
					<Auth>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</Auth>
				) : (
					<Layout>
						<Component {...pageProps} />
					</Layout>
				)}
			</SessionProvider>
		</>
	);
}

function Auth({ children }) {
	// if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
	const { status } = useSession({ required: true });

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	return children;
}
