
import styles from "@/styles/account_Styles/CreateAccountStyles.module.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


function Create_AccountPage() {
	return (
		<main className={styles.mainContainer} >

	<div className={styles.createAccountLabelContainer}>
		<div className={styles.createAccountLabelContainer}>


			<div className={styles.createAccount_Title}>Create Account</div>

				<input className={styles.userInputStyles} type="fname" id="firstName" name="firstName" placeholder="First Name"/>
                <input className={styles.userInputStyles} type="lname" id="lastName" name="lastName" placeholder="Last Name"/>
                <div className={styles.spaceStyles}></div>

                <input className={styles.userInputStyles} type="email" id="email" name="email" placeholder="Email"/>
                <input className={styles.userInputStyles} type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"/>
				<input className={styles.userInputStyles} type="password" id="pwd" name="pwd" placeholder="Password"/>
                <input className={styles.userInputStyles} type="password" id="pwdValidate" name="pwdValidate" placeholder="Confirm Password"/>



                <div className={styles.spaceStyles}></div>
		<div className={styles.createAccount_BtnCenter}>
			<div className={styles.createAccount_Container}>
				<a href="./createAccountVerifyPage"><button >Create Account</button></a>

			</div>
			</div>

			<div className={styles.SignInContainer}>
				<a href="./signInPage" >Have an Account?  Sign in here!</a>
		
			</div>
		</div>
		
		</div>
		</main>
	);
}


export default function createAccountPage(pageProps){
	return (
		<GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined,
        }}
      >
        <Create_AccountPage {...pageProps} />
      </GoogleReCaptchaProvider>

	);
}


