import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";
import styles from "@/styles/homepage.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		
				<main className={styles.main}>
					
        <div>
						
          <section className={styles.center}>
              <Link href='./henna-design'><Image src={"/hennaPics/henna11.png"} fill sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw, (max-height: 410px) 100vw, (max-height: 600px) 50vw, 33vw" alt="" priority /></Link>
              
              </section>

              <div className={styles.colorBlock}>
                <h1 className={styles.textColor}>Shop Our Popular Henna Designs</h1>
                </div>


                  <section className={styles.grid}>
                  <Image src={"/index/toppers.png"} alt="Toppers" width={447} height={477} priority />
                  <Image src={"/index/engraving.png"} alt="Engraving" width={351} height={529} priority />
                  <Image src={"/index/weddingSign.png"} alt="WeddingSign" width={428} height={483} priority />
                  <section className={styles.gridColor}> 
                        <Link href='./topper'><h1 className={styles.gridText}>Toppers</h1></Link>
                        
                    </section>
                    <section className={styles.gridColor3}> 
                        <Link href='./engraving-design'><h1 className={styles.gridText}>Engraving</h1></Link>
                        
                    </section>

                    <section className={styles.gridColor2}> 
                        <Link href='./wedding-sign'><h1 className={styles.gridText}>Wedding Sign</h1></Link>
                        
                    </section>
                  </section>
                  

                  
                

						
                </div>

				
				</main>
	
	);
}

