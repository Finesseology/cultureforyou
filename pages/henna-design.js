// Henna Showcase page
import Image from 'next/image';
import styles from '../styles/HennaStyles.module.css';

function HennaGallery({designs}){
      return (
    <div className={styles.hennaGrid}>
      {designs.map((design) => (
        <div key={design.id} className={styles.hennaPic}>
          <Image src={design.image} width={380} height={400} alt={design.name} />
          <h2>{design.name}</h2>
          <p>{design.description}</p>
        </div>
      ))}
    </div>
  );
   
}

// an array of henna images with their attributes
const designs = [
  {
    id: 1,
    name: 'henna sample 1',
    description: 'nice henna',
    image: '/index/henna.png'
  },
  {
    id: 2,
    name: 'henna sample 2',
    description: 'beautiful henna',
    image: '/index/henna2.png'
  },
  {
    id: 3,
    name: 'henna sample 3',
    description: 'amazing henna',
    image: '/index/henna3.png'
  },
  {
    id: 4,
    name: 'henna sample 4',
    description: 'gorgeous henna',
    image: '/index/henna4.png'
  },
  {
    id: 5,
    name: 'henna sample 5',
    description: 'awesome henna',
    image: '/index/henna5.png'
  },
  {
    id: 6,
    name: 'henna sample 6',
    description: 'wonderful henna',
    image: '/index/henna6.png'
  },
  {
    id: 7,
    name: 'henna sample 7',
    description: 'elegant henna',
    image: '/index/henna7.png'
  },
  {
    id: 8,
    name: 'henna sample 8',
    description: 'delightful henna',
    image: '/index/henna8.png'
  },
  {
    id: 9,
    name: 'henna sample 9',
    description: 'lovely henna',
    image: '/index/henna9.png'
  },
  {
    id: 10,
    name: 'henna sample 10',
    description: 'pretty henna',
    image: '/index/henna10.png'
  },
  {
    id: 11,
    name: 'henna sample 11',
    description: 'impressive henna',
    image: '/index/henna.png'
  },
  {
    id: 12,
    name: 'henna sample 12',
    description: 'charming henna',
    image: '/index/henna3.png'
  }

]

export default function Henna() {
  return (
    <div>
      <h1> <center> Henna Showcase </center></h1>
      <HennaGallery designs={designs} />
    </div>
  );
}



