import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react"
import styles from "@/styles/ShopPageStyles.module.css";

export default function signInPage() {
	return (
		<main className={styles.main}>
			<div>Sign In PAge</div>
            <button onClick={() => signIn("google")}>Sign in with Google</button>
            <button onClick={() => signOut()}>Sign out</button>
		</main>
	);
}
