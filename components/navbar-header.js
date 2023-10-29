import React, { useState, useEffect } from "react";
import styles from "../styles/components_Styles/navbar-header-styles.module.css";
import Image from "next/image";
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


	
	const isUser = status === "authenticated";

	
	if (status === "loading") {
		return (
			<nav>
				<div className={styles.mainContainer}>
					<div className={styles.webTitle}>
						<Link className={styles.webTitle_li} href="/">
						<Image
									className={styles.image}
									src={"/homepagePics/logohand.png"}
									alt="logohand"
									width={50}
									height={50}
									priority />
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

						<a href="../sign-in-page" className={styles.signInOutButtonA}>Sign in</a>
		
					</ul>
				</div>
			</nav>
		);
	}

	return (
		<nav className={styles.mainContainer}>
			<div className={styles.webTitle}>
						<Link className={styles.webTitle_li} href="/">
						<Image
									className={styles.image}
									src={"/homepagePics/logohand.png"}
									alt="logohand"
									width={50}
									height={50}
									priority />
						</Link>
					</div>
			<ul className={styles.SignInSignOut_ul}>
				{/*Only isAdmin logged in will show this admin tab*/}
				<Link className={styles.SignInSignOut_li} href="/">
					<li>Home</li>
				</Link>

				<Link className={styles.SignInSignOut_li} href="../appointments">
					<li>Appointments</li>
				</Link>

				{session.isAdmin && (
					<Link className={styles.SignInSignOut_li} href="../admin-page">
						<li>Admin Dashboard</li>
					</Link>
				)}

				{isUser  &&  (
					<Link className={styles.SignInSignOut_li} href="../user-page">
						<li>User Dashboard</li>
					</Link>
				)}

				<div className={styles.SignInSignOut_li}>|</div>

				<button className={styles.signInOutButton} onClick={() => signOut()}>Sign out</button>
			</ul>
		</nav>
	);
}
