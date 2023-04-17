import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react"
import styles from "@/styles/ShopPageStyles.module.css";
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
		
		<main className={styles.main} >
			<div>Sign In PAge</div>
            <button onClick={handleClick}>Sign in with Google</button>
            <button onClick={() => signOut()}>Sign out</button>
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
