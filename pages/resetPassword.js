
import styles from "@/styles/account_Styles/resetPasswordStyles.module.css";



export default function resetPassword() {
	return (
		<main className={styles.mainContainer} >

	<div className={styles.resetPasswordLabelContainer}>
		<div className={styles.resetPasswordLabelContainer}>


			<div className={styles.resetPassword_Title}>Email Verified!</div>
            <div className={styles.resetPassword_Desc}>Please reset your password below for example@email.com</div>
			<div className={styles.resetPassword_Desc}> <a href="./forgotPasswordPage" className={styles.resentBtn}>Click here</a> if this is not your email</div>
            
            <div className={styles.spaceStyles}></div>
            

            <input className={styles.userInputStyles} type="password" id="pwd" name="pwd" placeholder="New Password"/>
			<input className={styles.userInputStyles} type="password" id="pwdValidate" name="pwdValidate" placeholder="Confirm New Passowrd"/>


            <div className={styles.spaceStyles}></div>
            


                <div className={styles.resetPassword_BTNCenter}>
                <div className={styles.resetPassword_BTNContainer}>

				
                    <a href="./signInPage"><button>Reset Password</button></a>

                </div>
			</div>

			<div className={styles.SignInContainer}>
				<a href="./signInPage" >Back to Sign in</a>
		
			</div>
		</div>
		
		</div>
		</main>

		
	);
}



