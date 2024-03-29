import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/shop-page-styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function shopLayout() {
	return (
		<div className={styles.center}>
			<main className={styles.main}>
				<div className={styles.center}>
					<div className={styles.mainContainer}>
						<h1 className={styles.titleH1}> Welcome to our Shop </h1>
						<p className={styles.descpp}>
							{" "}
							Here we provide Henna, Cake Topper, Engraving, and Wedding Sign Services!{" "}
						</p>

						<div className={styles.shopNavBarContainer}>
							<a href="./shop-layout" className={styles.active}>
								All
							</a>
							<a className={styles.shopNavBarLine}>|</a>
							<a href="./henna-showcase" className={styles.shopNavBar}>
								Henna
							</a>
							<a className={styles.shopNavBarLine}>|</a>
							<a href="./topper" className={styles.shopNavBar}>
								Topper
							</a>
							<a className={styles.shopNavBarLine}>|</a>
							<a href="./engraving-showcase" className={styles.shopNavBar}>
								Engraving
							</a>
							<a className={styles.shopNavBarLine}>|</a>
							<a href="./wedding-sign" className={styles.shopNavBar}>
								Wedding Sign
							</a>
						</div>

						<div className={styles.centerContainer}>
							<div className={styles.row}>
								<div className={styles.column}>
									<div className={styles.card}>
										<a href="./henna-showcase">
											<Image
												className={styles.imgStyle}
												src={"/hennaPics/henna5.png"}
												alt="Toppers"
												width={150}
												height={200}
												priority
											/>
										</a>
										<a href="./henna-showcase" className={styles.titleH3}>
											Henna
										</a>
										<p className={styles.descP}>
											Check out our henna designs! If you find a design you like, please schedule
											an appointment with us on the appointments page.
										</p>
									</div>
								</div>

								<div className={styles.column}>
									<div className={styles.card}>
										<a href="./topper">
											<Image
												className={styles.imgStyle}
												src={"/index/toppers.png"}
												alt="Toppers"
												width={250}
												height={300}
												priority
											/>
										</a>
										<a href="./topper" className={styles.titleH3}>
											Topper
										</a>
										<p className={styles.descP}>
											Check out our custom toppers! We can help make your celebrations even more
											special with toppers for anything from weddings to graduations.
										</p>
									</div>
								</div>

								<div className={styles.column}>
									<div className={styles.card}>
										<a href="./engraving-showcase">
											<Image
												className={styles.imgStyle}
												src={"/index/engraving.png"}
												alt="Engraving"
												width={250}
												height={300}
												priority
											/>
										</a>
										<a href="./engraving-showcase" className={styles.titleH3}>
											Engraving
										</a>
										<p className={styles.descP}>
											Check out our custom engravings! Show off your support for your favorite
											sports team, or proudly display a cool floral design for everyone to see.
										</p>
									</div>
								</div>

								<div className={styles.column}>
									<div className={styles.card}>
										<a href="./wedding-sign">
											<Image
												className={styles.imgStyle}
												src={"/index/weddingSign.png"}
												alt="WeddingSign"
												width={250}
												height={200}
												priority
											/>
										</a>
										<a href="./wedding-sign" className={styles.titleH3}>
											Wedding Sign
										</a>
										<p className={styles.descP}>
											Check out our custom wedding signs! Let us help you make your celebration
											even more special with a one of a kind wedding sign.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
