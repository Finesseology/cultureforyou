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
					<div className={styles.introTitle}></div>
					<div className={styles.centerImage}>
								<Image
									className={styles.centeredImage}
									src={"/homepagePics/transparent.png"}
									alt="Toppers"
									width={350}
									height={400}
									priority />
</div>

					<div className={styles.introDesc}>

					

					</div>
					<div className={styles.servicesIntro}>
						
					<div className={styles.shopNavBarContainer}>
							
							
							<a href='./henna-showcase'  className={styles.shopNavBar}>Henna</a>
							<a className={styles.shopNavBarLine}>|</a>
							<a href='./topper' className={styles.shopNavBar}>Topper</a>
							<a className={styles.shopNavBarLine}>|</a>
							<a href='./engraving-showcase' className={styles.shopNavBar}>Engraving</a>
							<a  className={styles.shopNavBarLine}>|</a>
							<a href='./wedding-sign' className={styles.shopNavBar}>Wedding Sign</a>
						</div>
								
							</div>

					

				</div>

				<div className={styles.centerHome}>
					<div className={styles.container}>
						<div className={styles.row}>
							<div className={styles.column66}>
							<a className={styles.textdec} href="./henna-showcase" >
								<h1 className={styles.sectionTitle}>Henna Service</h1>
								</a>
								<p>
									We offer henna services by appointment. We offer personalized henna designs for all occasions.
									Our henna services are of the highest quality and we only use 100% organic henna.
									Click below to browse some of our designs.
								</p>

								<a href="./henna-showcase" className={styles.button}>
									Henna Showcase
								</a>
							</div>
							<div className={styles.column33}>
								<a href="./henna-showcase" > 
								<Image
									className={styles.imgStyle}
									src={"/hennaPics/henna8.png"}
									alt="Toppers"
									width={250}
									height={300}
									priority />
									</a>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.centerHome}>
					<div className={styles.container}>
						<div className={styles.row}>
							<div className={styles.column33}>
							<a href="./topper" >
								<Image
									className={styles.imgStyle}
									src={"/topperPics/topper2.png"}
									alt="Toppers"
									width={250}
									height={300}
									priority />
									</a>
							</div>
							<div className={styles.column66}>
							<a className={styles.textdec} href="./topper" >
								<h1 className={styles.sectionTitle}>Toppers</h1>
								</a>
								<p>
									We do toppers for all sorts of special occasions. Our wedding toppers are sure to make
									any celebration extra special. We offer a wide range of toppers, including wedding toppers,
									birthday toppers, and more! Check out our topper designs and shop for toppers!
								</p>
								<a href="./topper" className={styles.button}>
									Toppers Showcase
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.centerHome}>
					<div className={styles.container}>
						<div className={styles.row}>
							<div className={styles.column66}>
							<a className={styles.textdec} href="./engraving-showcase" >
								<h1 className={styles.sectionTitle}>Engraving</h1>
								</a>
								<p>
									We do engraving for all types of products! Get your lovers name engraved on a starbucks
									cup, or get your name engraved on a your wine glass! We offer a wide range of engraving
									services, including sports, glass, floral, and more! Check out our engraving designs and
									shop for engraving products!
								</p>

								<a href="./engraving-showcase" className={styles.button}>
									Engraving Showcase
								</a>
							</div>
							<div className={styles.column33}>
							<a href="./engraving-showcase" >
								<Image
									className={styles.imgStyle}
									src={"/index/YellowFloralWreath.png"}
									alt="Engraving"
									width={250}
									height={300}
									priority />
									</a>
							</div>
							
						</div>
					</div>
				</div>

				<div className={styles.centerHome}>
					<div className={styles.container}>
						<div className={styles.row}>
							<div className={styles.column33}>
							<a href="./wedding-sign" >
								<Image
									className={styles.imgStyle}
									src={"/index/weddingSign.png"}
									alt="WeddingSign"
									width={250}
									height={200}
									priority />
									</a>
							</div>
							<div className={styles.column66}>
							<a className={styles.textdec} href="./wedding-sign" >
								<h1 className={styles.sectionTitle}>Wedding Sign</h1>
								</a>
								<p>
									We do Wedding Signs for the most important celebration of your life. Our wedding signs
									are sure to make your wedding extra special. We offer a wide range of wedding signs,
									including welcome signs, seating charts, and more! Check out our showcase
									and shop for wedding signs!
								</p>
								<a href="./wedding-sign" className={styles.button}>
									Wedding Sign Showcase
								</a>
								<div class="overlay">
							</div>
						</div>
					</div>
				</div>
				</div>
			</main>
	);
}
