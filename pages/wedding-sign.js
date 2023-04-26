import Image from 'next/image';
import styles from '../styles/wedding-signs.module.css';
import Link from 'next/link'

function SignsGallery({ designs }) {
  return (
    <div className={styles.grid}>
    {designs.map((design) => (
      <div key={design.id} className={styles.weddingSignPic}>
       <a className={styles.textA}  href="/special-orders"> 
        <Image className={styles.imgStyles} src={design.image} width={225} height={250} alt={design.name} />
        
        <div className={styles.p}>
        <h2 className={styles.titleH2}>{design.name}</h2>
        <p className={styles.descP}>{design.description}</p>
        </div>
        </a>
      </div>
    ))}
  </div>
  );

}

// an array of Sign images with their attributes
const designs = [
  {
    id: 1,
    name: 'Acrylic Wedding Sign',
    image: '/weddingsPics/wedd1.png',
    price: '$20.99'
  },
  {
    id: 2,
    name: 'Sage Green with Gold Acrylic Wedding Sign',
    image: '/weddingsPics/wedd2.png',
    price: '$15.99'
  },
  {
    id: 3,
    name: 'Strong Red with Gold Acrylic Wedding Sign',
    image: '/weddingsPics/wedd3.png',
    price: '$25.99'
  },
  {
    id: 4,
    name: 'Mehndi Special Wedding Sign',
    image: '/weddingsPics/wedd4.png',
    price: '$17.99'
  },
  {
    id: 5,
    name: 'White Wedding Sign for Engagement day',
    image: '/weddingsPics/wedd5.png',
    price: '$26.99'
  },
  {
    id: 6,
    name: 'Beautifl Verse of the Quran - Quran Ameen Sign',
    image: '/weddingsPics/wedd6.png',
    price: '$30.99'
  },
  {
    id: 7,
    name: '18x24 Acrylic Sign',
    image: '/weddingsPics/wedd7.png',
    price: '$22.99'
  },
  {
    id: 8,
    name: 'Khatam of Quran acknowledgment Sign',
    image: '/weddingsPics/wedd8.png',
    price: '$22.99'
  }
]
export default function WeddingSigns(){
    return (
      <div className={styles.myDiv}>

<center>
<h1 className={styles.titleH1}>  Wedding Sign Shop </h1>
  <p className={styles.descP}> Are you in needs of wedding signs? Check out our wedding signs services below! </p>
        <div className={styles.shopNavBarContainer}>
            <a href='./shop-layout' className={styles.shopNavBar}>All</a>
            <a  className={styles.shopNavBarLine}>|</a>
            <a href='./henna-showcase'  className={styles.shopNavBar}>Henna</a>
            <a className={styles.shopNavBarLine}>|</a>
            <a href='./topper' className={styles.shopNavBar}>Topper</a>
            <a className={styles.shopNavBarLine}>|</a>
            <a href='./engraving-showcase' className={styles.shopNavBar}>Engraving</a>
            <a  className={styles.shopNavBarLine}>|</a>
            <a href='./wedding-sign' className={styles.active}>Wedding Sign</a>
          </div>
          </center>
          <SignsGallery designs={designs} />
        </div>
      );
}