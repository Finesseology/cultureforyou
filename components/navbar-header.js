import React from "react";
import styles from "../styles/components_Styles/navbar-header-styles.module.css";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function SignInSignOutBar() {
	const { status } = useSession({
		required: true,
		onUnauthenticated() {},
	});

	const { data: session } = useSession();
	//Setting admin to the cultureforyou email by checking the logged in session
	const isAdmin = session && session.user && session.user.email === "cultureforyou1@gmail.com";
	if (status === "loading") {
		return (
			<nav>
				<div className={styles.mainContainer}>
					<div className={styles.webTitle}>
						<Link className={styles.webTitle_li} href="/">
							Culture For You
						</Link>
					</div>

					<ul className={styles.SignInSignOut_ul}>
						<Link className={styles.SignInSignOut_li} href="/">
							<li>Home</li>
						</Link>
						<Link className={styles.SignInSignOut_li} href="../appointments">
							<li>Appointments</li>
						</Link>
						<div className={styles.SignInSignOut_li}>|</div>
						<Link className={styles.SignInSignOut_li} href="../sign-in-page">
							<li>Sign In</li>
						</Link>
					</ul>
				</div>
			</nav>
		);
	}

	return (
		<nav className={styles.mainContainer}>
			<ul className={styles.SignInSignOut_ul}>
				{/*Only isAdmin logged in will show this admin tab*/}
				<Link className={styles.SignInSignOut_li} href="/">
					<li>Home</li>
				</Link>

				<Link className={styles.SignInSignOut_li} href="../appointments">
					<li>Appointments</li>
				</Link>

				{isAdmin && (
					<Link className={styles.SignInSignOut_li} href="../admin-page">
						<li>Admin Dashboard</li>
					</Link>
				)}

				<div className={styles.SignInSignOut_li}>|</div>

				<button onClick={() => signOut()}>Sign out</button>
			</ul>
		</nav>
	);
}
