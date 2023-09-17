import React from "react";
import styles from "../styles/components_Styles/FooterStyles.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.Footer_Main}>
			<div className={styles.rowContainer}>
				<div className={styles.row}>
					<div className={styles.column}>
						<div className={styles.columnTitle}>Navigations</div>
						<Link className={styles.columnDesc} href="/">
							<li>Home</li>
						</Link>
						<Link className={styles.columnDesc} href="../shop-layout">
							<li>Shop</li>
						</Link>
						<Link className={styles.columnDesc} href="../appointments">
							<li>Appointments</li>
						</Link>
					</div>

					<div className={styles.column}>
 					 <div className={styles.columnTitle}>Follow Us</div>
  						<div className={styles.columnDesc}>
    						<a href="https://www.instagram.com/cultureforyou_/">
    					 <img
        					src="/homepagePics/instagramIcon.png"
       						alt="Instagram Icon"
        					className={styles.icon}
						/>
						</a>
					</div>
					</div>

					<div className={styles.column}>
						<div className={styles.columnTitle}>Contact Us</div>
						<div className={styles.columnDesc}>
							<a href="mailto:cultureforu1@gmail.com">
							<img
								src="/homepagePics/email.png"
								alt="Email Icon"
								className={styles.icon}/>
							</a>
						</div>
						</div>

						<div className={styles.column}>
						<div className={styles.columnTitle}>About Us</div>
						<div className={styles.columnDesc}>
							We are a local company that specializes in henna, engraving, toppers, and wedding signs! We
							work closely with our customers to ensure they get personalized products that they love! We
							are located in Lodi, CA and we offer in person appointments and online shopping for our
							products!
						</div>
					</div>
					
					</div>

				
				</div>

			

				<div className={styles.lowerFooterContainer}>
					<hr className={styles.lowerFooterContainerHR} />
					<div className={styles.lowerFooterCopyRight}>
						Copyright &#169; 2023 All right reserved.
						<Link className={styles.lowerFooterPTOS} href="../privacy-policy">
							<li>Privacy Policy</li>
						</Link>
						<Link className={styles.lowerFooterPTOS} href="../terms">
							<li>Term of Service</li>
						</Link>{" "}
					</div>
				</div>
			</div>
		
	);
};

export default Footer;
