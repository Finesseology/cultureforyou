import Image from 'next/image';
import styles from '../styles/weddingSigns.module.css';
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
            <p>{weddingSign.description}</p>
            <p> {weddingSign.price}</p>
          
        </div>

      ))}
    </div>
  );

}

// an array of henna images with their attributes
const signs = [
  {
    id: 1,
    name: 'sign  1',
    description: 'nice sign',
    image: '/weddingsPics/wedd1.png',
    price: '$20.99'
  },
  {
    id: 2,
    name: 'sign  2',
    description: 'beautiful sign',
    image: '/weddingsPics/wedd2.png',
    price: '$15.99'
  },
  {
    id: 3,
    name: 'sign  3',
    description: 'amazing sign',
    image: '/weddingsPics/wedd3.png',
    price: '$25.99'
  },
  {
    id: 4,
    name: 'sign  4',
    description: 'gorgeous sign',
    image: '/weddingsPics/wedd4.png',
    price: '$17.99'
  },
  {
    id: 5,
    name: 'sign  5',
    description: 'awesome sign',
    image: '/weddingsPics/wedd5.png',
    price: '$26.99'
  },
  {
    id: 6,
    name: 'sign  6',
    description: 'wonderful sign',
    image: '/weddingsPics/wedd6.png',
    price: '$30.99'
  },
  {
    id: 7,
    name: 'sign  7',
    description: 'elegant sign',
    image: '/weddingsPics/wedd7.png',
    price: '$22.99'
  }
]
export default function WeddingSigns(){
    return (
        <div>
          <h1> <center> Wedding Sign Designs </center></h1>
          <SignsGallery signs={signs} />
        </div>
      );
}