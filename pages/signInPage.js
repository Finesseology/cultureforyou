import { signIn } from "next-auth/react"

import styles from "@/styles/account_Styles/signInStyles.module.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

 function SigningIn() {

	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleClick = async (e) => {
		
			e.preventDefault();
			if (!executeRecaptcha) {
				console.log("Execute recaptcha not yet available");
				return;
			  }
			
			  try {
				const gReCaptchaToken = await executeRecaptcha();
      			console.log(gReCaptchaToken, "response Google reCaptcha server");
      			await signIn("google", { csrfToken: gReCaptchaToken, reCaptchaResponse: gReCaptchaToken });
				} catch (error) {
				console.log(error);
			  }
		
	};

	

	return (
		
		<main className={styles.mainContainer} >

	<div className={styles.signInLabelContainer}>
		<div className={styles.signInLabelContainer}>


			<div className={styles.signIn_Title}>Sign In</div>

		
				<input className={styles.userInputStyles} type="email" id="email" name="email" placeholder="Enter Email"/>

				<input className={styles.userInputStyles} type="password" id="pwd" name="pwd" placeholder="Enter Password"/>

				<div className={styles.remembeMeContainer}>
					<input className={styles.checkBoxStyles}  type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Remember me</label>
				</div>




		<div className={styles.signInBtn_Center}>
			<div className={styles.signInBtn_Container}>
				<button >Sign in with Email</button>
				<button onClick={handleClick}>Sign in with Google</button>
			</div>
			</div>

			<div className={styles.ForgotCreateContainer}>
				<a href="./forgotPasswordPage">Forgot Password</a>
				<a href="./createAccountPage">Create Account</a>
			</div>
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
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <SigningIn {...pageProps} />
    </GoogleReCaptchaProvider>
	);
}

