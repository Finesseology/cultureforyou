import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";
import styles from "@/styles/Homepage.module.css";


const inter = Inter({ subsets: ["latin"] });

export default function Home() 
{
	return (
		
	<main className={styles.mainContainer}>

        <div className={styles.introContainer}>
         <div className={styles.introTitle}>Welcome to Culture For You!</div>
         <div className={styles.introDesc}>Check out our designs! Here we provides Henna's service, engraving, toppers, and wedding signs.</div>
        </div>

        <div className={styles.center}>
<div className={styles.container}>
  <div className={styles.row}>
    <div className={styles.column66}>
      <h1 className={styles.sectionTitle}>Henna Service</h1>
      <p>We do henna service lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <a href='./henna-design' className={styles.button}>Designs</a>
      
      <a href='./henna-showcase' className={styles.button}>Shop</a>

    </div>
    <div className={styles.column33}>
    <Image  className={styles.imgStyle} src={"/hennaPics/henna5.png"} alt="Toppers" width={250} height={300} priority />
    </div>
  </div>
</div>
</div>

<div className={styles.center}>
<div className={styles.container}>
<div className={styles.row}>
<div className={styles.column33}>
    <Image  className={styles.imgStyle} src={"/index/toppers.png"} alt="Toppers" width={250} height={300} priority />
    </div>
    <div className={styles.column66}>
      <h1 className={styles.sectionTitle}>Topper</h1>
      <p>We do Topper incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <a href='./topper' className={styles.button}>Shop</a>

    </div>
  </div>
</div>
</div>

<div className={styles.center}>
<div className={styles.container}>
  <div className={styles.row}>
    <div className={styles.column66}>
      <h1 className={styles.sectionTitle}>Engraving</h1>
      <p>We do Engraving because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href='./engraving-design' className={styles.button}>Designs</a>
      
      <a href='./engraving-showcase' className={styles.button}>Shop</a>
    </div>
    <div className={styles.column33}>
    <Image  className={styles.imgStyle} src={"/index/engraving.png"} alt="Engraving" width={250} height={300} priority />
    </div>
  </div>
</div>
</div>

<div className={styles.center}>
<div className={styles.container}>
<div className={styles.row}>
<div className={styles.column33}>
<Image className={styles.imgStyle} src={"/index/weddingSign.png"} alt="WeddingSign" width={250} height={200} priority />
    </div>
    <div className={styles.column66}>
      <h1 className={styles.sectionTitle}>Wedding Sign</h1>
      <p>We do Wedding Sign incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <a href='./wedding-sign' className={styles.button}>Shop</a>
      
    </div>
  </div>
</div>
</div>
				
	</main>
	
	);
}

