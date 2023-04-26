import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/homepage.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.mainContainer}>
			<div className={styles.introContainer}>
				<div className={styles.introTitle}>Welcome to Culture For You!</div>
				<div className={styles.introDesc}>
					Check out our one of a kind designs! Here we provide Henna services, Engraving, Toppers, and Wedding
					Signs.
				</div>
			</div>

			<div className={styles.center}>
				<div className={styles.container}>
					<div className={styles.row}>
						<div className={styles.column66}>
							<h1 className={styles.sectionTitle}>Henna Service</h1>
							<p>
								We offer henna services by appointment! We do henna for all occasions, including special
								occasions or just for fun! Our henna services are of the highest quality and we use only
								the best henna products. Check out our henna designs and shop for henna products!
							</p>

							<a href="./henna-showcase" className={styles.button}>
								Shop
							</a>
						</div>
						<div className={styles.column33}>
							<Image
								className={styles.imgStyle}
								src={"/hennaPics/henna5.png"}
								alt="Toppers"
								width={250}
								height={300}
								priority
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.center}>
				<div className={styles.container}>
					<div className={styles.row}>
						<div className={styles.column33}>
							<Image
								className={styles.imgStyle}
								src={"/index/toppers.png"}
								alt="Toppers"
								width={250}
								height={300}
								priority
							/>
						</div>
						<div className={styles.column66}>
							<h1 className={styles.sectionTitle}>Topper</h1>
							<p>
								We do Topper for all sorts of special occasions. Our wedding toppers are sure to make
								any celebration extra special. offer a wide range of toppers, including wedding toppers,
								birthday toppers, and more! Check out our topper designs and shop for toppers!
							</p>
							<a href="./topper" className={styles.button}>
								Shop
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.center}>
				<div className={styles.container}>
					<div className={styles.row}>
						<div className={styles.column66}>
							<h1 className={styles.sectionTitle}>Engraving</h1>
							<p>
								We do engraving for all types of products! Get your lovers name engraved on a starbucks
								cup, or get your name engraved on a your wine glass! We offer a wide range of engraving
								services, including sports, glass, floral, and more! Check out our engraving designs and
								shop for engraving products!
							</p>

							<a href="./engraving-showcase" className={styles.button}>
								Shop
							</a>
						</div>
						<div className={styles.column33}>
							<Image
								className={styles.imgStyle}
								src={"/index/engraving.png"}
								alt="Engraving"
								width={250}
								height={300}
								priority
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.center}>
				<div className={styles.container}>
					<div className={styles.row}>
						<div className={styles.column33}>
							<Image
								className={styles.imgStyle}
								src={"/index/weddingSign.png"}
								alt="WeddingSign"
								width={250}
								height={200}
								priority
							/>
						</div>
						<div className={styles.column66}>
							<h1 className={styles.sectionTitle}>Wedding Sign</h1>
							<p>
								We do Wedding Signs for the most important celebration of your life. Our wedding signs
								are sure to make your wedding extra special. We offer a wide range of wedding signs,
								including welcome signs, seating charts, and more! Check out our wedding sign designs
								and shop for wedding signs!
							</p>
							<a href="./wedding-sign" className={styles.button}>
								Shop
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
