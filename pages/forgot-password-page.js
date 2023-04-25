
import styles from "@/styles/account_Styles/forgot-password-styles.module.css";




export default function forgotPassword() {
	return (
		<main className={styles.mainContainer} >

	<div className={styles.forgotPasswordLabelContainer}>
		<div className={styles.createAccountLabelContainer}>


			<div className={styles.forgotpassword_Title}>Forgot your Password?</div>
            <div className={styles.forgotPassword_Desc}> Please enter email to reset password</div>

                <input className={styles.userInputStyles} type="email" id="email" name="email" placeholder="Email"/>

				




                <div className={styles.spaceStyles}></div>
		    <div className={styles.forgotPassword_BTNCenter}>
                <div className={styles.forgotPassword_BTNContainer}>

				
				<a href="./account-validate-page"><button>Reset Password</button></a>

                </div>
			</div>

			<div className={styles.SignInContainer}>
				<a href="./sign-in-page" >Back to Sign in</a>
		
			</div>
		</div>
		
		</div>
		</main>
	);
}


