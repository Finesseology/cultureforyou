import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "@/styles/account_Styles/sign-in-styles.module.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function SigningIn() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const { data: session } = useSession();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// Check if the user is already signed in, and if so, redirect to another page.
		if (session) {
			router.replace("/");
		}
	}, [session, router]);

	const handleClick = async (e) => {
		e.preventDefault();

		if (!executeRecaptcha) {
			console.log("Execute recaptcha not yet available");
			return;
		}

		try {
			setIsLoading(true); // Set loading state to true

			const gReCaptchaToken = await executeRecaptcha();
			console.log(gReCaptchaToken, "response Google reCaptcha server");
			await signIn("google", { csrfToken: gReCaptchaToken, reCaptchaResponse: gReCaptchaToken });

			window.alert("Successful Sign in!!");
			router.replace("/");
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false); // Reset loading state to false
		}
	};

	return (
		<main className={styles.mainContainer}>
			<div className={styles.signInLabelContainer}>
				<div className={styles.signInLabelContainer}>
					<div className={styles.signIn_Title}>Sign In</div>

					{/*<input className={styles.userInputStyles} type="email" id="email" name="email" placeholder="Enter Email"/>

				<input className={styles.userInputStyles} type="password" id="pwd" name="pwd" placeholder="Enter Password"/>

				<div className={styles.remembeMeContainer}>
					<input className={styles.checkBoxStyles}  type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label>
				</div>*/}

					<div className={styles.signInBtn_Center}>
						<div className={styles.signInBtn_Container}>
							<button onClick={handleClick} disabled={isLoading}>
								{isLoading ? "Signing In..." : "Sign in with Google"}
							</button>
						</div>
					</div>

					{/*
				<div className={styles.ForgotCreateContainer}>
					<a href="./forgot-password-page">Forgot Password</a>
					<a href="./create-account-page">Create Account</a>
				</div>
			*/}
				</div>
			</div>
		</main>
	);
}

export default function SignInPage(pageProps) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
			reCaptchaSecret={process.env.RECAPTCHA_SECRETKEY}
			scriptProps={{
				async: true,
				defer: false,
				appendTo: "head",
				nonce: undefined,
			}}>
			<SigningIn {...pageProps} />
		</GoogleReCaptchaProvider>
	);
}
