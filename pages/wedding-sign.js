import Image from 'next/image';
import styles from '../styles/wedding-signs.module.css';
import Link from 'next/link'

function SignsGallery({ signs }) {
  return (
    <div className={styles.signGrid}>
      {signs.map((weddingSign) => (
        <div key={weddingSign.id} className={styles.signPic}>
          <Link href={`/WeddingSigns/${weddingSign.id}`}> 
            <Image src={weddingSign.image} width={350} height={400} alt={weddingSign.name} />
          </Link>  
            <h2>{weddingSign.name}</h2>
            <p> {weddingSign.price}</p>
          
        </div>

      ))}
    </div>
  );

}

// an array of Sign images with their attributes
const signs = [
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
        <div className={styles.h1}>
          <h1> <center> Wedding Sign Designs </center></h1>
          <SignsGallery signs={signs} />
        </div>
      );
}