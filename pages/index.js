import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Homepage.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		
				<main className={styles.main}>
					<div>
						

						<section className={styles.center}>
							<h1 className={styles.textColor}>Culture For You Homepage</h1>
						</section>


						<div className={styles.sectionMargin}></div>

            
						<div className={styles.colorBlock}>
							<h1>Preview</h1>
							<p>Product previews of the website</p>

							<div className={styles.sectionMargin}></div>

							<div className={styles.grid2}>
								<b>Engraving</b>
								<b>Henna</b>
								<b>Wedding Sign</b>
								<b>Toppers</b>
								<b>Makeup</b>
							</div>
              <div className={styles.sectionMargin}></div>

							<div className={styles.grid}>
								<Image src={"/index/engraving.png"} alt="Engraving" width={190} height={180} priority />

								<Image src={"/index/hennaTest.png"} alt="Henna" width={190} height={180} priority />

								<Image src={"/index/weddingSign.png"} alt="WeddingSign" width={190} height={180} priority />

								<Image src={"/index/toppers.png"} alt="Toppers" width={190} height={180} priority />

								<Image src={"/index/makeup.png"} alt="Makeup" width={190} height={180} priority />
							</div>
						</div>

						<div className={styles.sectionMargin}></div>

						<div className={styles.colorBlock}>
							<h2>Testimonials</h2>
							<p>Testimonials will be aligned here possibly</p>
              <p>Reviews from customers on Makeup, Henna, and Custom items</p>

              <div className = {styles.grid}> 
              <figure className={styles.snip1533}>
                  <figcaption>
                    <blockquote>
                      <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
                    </blockquote>
                    <h3>Wisteria Ravenclaw</h3>
                    <h4>Wedding Sign</h4>
                  </figcaption>
              </figure>

              <figure className={styles.snip1533}>
                <figcaption>
                  <blockquote>
                    <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
                  </blockquote>
                  <h3>Ursula </h3>
                  <h4>Henna</h4>
                </figcaption>
              </figure>

              <figure className={styles.snip1533}>
                <figcaption>
                  <blockquote>
                    <p>The only skills I have the patience to learn are those that have no real application in life. </p>
                  </blockquote>
                  <h3>Ingredia </h3>
                  <h4>Custom Engraving</h4>
                </figcaption>
              </figure>

              <figure className={styles.snip1533}>
                <figcaption>
                  <blockquote>
                    <p>The only skills I have the patience to learn are those that have no real application in life. </p>
                  </blockquote>
                  <h3>Ingredia </h3>
                  <h4>Makeup</h4>
                </figcaption>
              </figure>

              <figure className={styles.snip1533}>
                <figcaption>
                  <blockquote>
                    <p>The onlyy skills I have the patience to learn are those that have no real application in life. </p>
                  </blockquote>
                  <h3>Ingredia </h3>
                  <h4>Cake Topper</h4>
                </figcaption>
              </figure>
              
              </div>
              
              
              
						</div>
					</div>
				</main>
	
	);
}

