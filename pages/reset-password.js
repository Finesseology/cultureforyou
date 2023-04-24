
import styles from "@/styles/account_Styles/reset-password-styles.module.css";



export default function resetPassword() {
	return (
		<main className={styles.mainContainer} >

	<div className={styles.resetPasswordLabelContainer}>
		<div className={styles.resetPasswordLabelContainer}>


			<div className={styles.resetPassword_Title}>Email Verified!</div>
            <div className={styles.resetPassword_Desc}>Please reset your password below for example@email.com</div>
			<div className={styles.resetPassword_Desc}> <a href="./forgot-password-page" className={styles.resentBtn}>Click here</a> if this is not your email</div>
            
            <div className={styles.spaceStyles}></div>
            

            <input className={styles.userInputStyles} type="password" id="pwd" name="pwd" placeholder="New Password"/>
			<input className={styles.userInputStyles} type="password" id="pwdValidate" name="pwdValidate" placeholder="Confirm New Passowrd"/>


            <div className={styles.spaceStyles}></div>
            


                <div className={styles.resetPassword_BTNCenter}>
                <div className={styles.resetPassword_BTNContainer}>

				
                    <a href="./sign-in-page"><button>Reset Password</button></a>

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



