
import styles from "@/styles/account_Styles/account-validate-styles.module.css";



export default function accountValidationPage() {
	return (
		<main className={styles.mainContainer} >

	<div className={styles.accountValidateLabelContainer}>
		<div className={styles.accountValidateLabelContainer}>


			<div className={styles.accountValidate_Title}>Verfiy Your Email Address</div>
            <div className={styles.accountValidate_Desc}>Verification code send to example@email.com</div>
            
            <div className={styles.spaceStyles}></div>
            

            <input className={styles.userInputStyles} type="tel" id="validateCode" name="validateCode" placeholder="Verification Code"/>


            <div className={styles.spaceStyles}></div>
            <div className={styles.accountValidate_Desc}> <a className={styles.resentBtn}>Click here</a> to resend Verification Code</div>



                <div className={styles.spaceStyles}></div>


                <div className={styles.accountValidate_BTNCenter}>
                <div className={styles.accountValidate_BTNContainer}>

				
				<a href="./reset-password"><button>Verify Email</button></a>

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






