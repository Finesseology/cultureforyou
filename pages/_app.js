import Layout from "../components/layout";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { SessionProvider } from "next-auth/react";
import { EventsProvider } from "../components/events-context"; // Update the path accordingly
import styles from '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
	const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
	return (
		<>
			<GoogleAnalytics measurementId={measurementId} />
			<SessionProvider session={session}>
				<EventsProvider> {/* Adding the EventsProvider here */}
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
				</EventsProvider> {/* Closing the EventsProvider here */}
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
