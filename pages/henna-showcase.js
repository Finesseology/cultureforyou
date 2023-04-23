// Henna Showcase page
// Clickable images lead to special-orders page
import Image from 'next/image';
import styles from '../styles/hennashow.module.css';

function HennaGallery({designs}){
      return (
    <div className={styles.grid}>
      {designs.map((design) => (
        <div key={design.id} className={styles.hennaPic}>
         <a href="/special-orders"> 
          <Image src={design.image} width={225} height={250} alt={design.name} />
          </a>
          <div className={styles.p}>
          <h2>{design.name}</h2>
          <p>{design.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// an array of henna images with their attributes
const designs = [
  {
    id: 1,
    name: 'Simple',
    description: 'A simple one-handed design that is not too detailed and fits an everyday look.',
    image: '/hennaPics/henna.png'
  },
  {
    id: 2,
    name: 'Intricate',
    description: 'A simple, yet detailed, design that works perfectly for pictures.',
    image: '/hennaPics/henna4.png'
  },
  {
    id: 3,
    name: 'Lace design',
    description: 'Delicate floral pieces perfectly designed together to create a beautiful, lace-like pattern.',
    image: '/hennaPics/henna6.png'
  },
  {
    id: 4,
    name: 'Floral design',
    description: 'A newer trendier style that is the right touch for someone looking for minimalism.',
    image: '/hennaPics/henna2.png'
  },
  {
    id: 5,
    name: 'Modern bridal henna',
    description: 'Bridal henna that does not take away from the outfit and jewelry instead pulls everything together.',
    image: '/hennaPics/henna10.png'
  },
  {
    id: 6,
    name: 'Detailed yet simple',
    description: 'A smaller design with details.',
    image: '/hennaPics/henna3.png'
  },
  {
    id: 7,
    name: 'Detailed with spaces',
    description: 'White space design with the perfect amount of details.',
    image: '/hennaPics/henna7.png'
  },
  {
    id: 8,
    name: 'Detailed and covered',
    description: 'Full hand design, extravagant and eye-catching.',
    image: '/hennaPics/henna8.png'
  },
  {
    id: 9,
    name: 'One-sided',
    description: 'Fuller asymmetrical design, perfect with jewelry.',
    image: '/hennaPics/henna5.png'
  },
  {
    id: 10,
    name: 'Full hand/down arm',
    description: 'Elbow-length design that goes well with bigger events.',
    image: '/hennaPics/henna14.png'
  },
   {
    id: 11,
    name: 'Mix-and-match',
    description: 'Mix different styles and designs to create a unique look.',
    image: '/hennaPics/henna12.png'
  },
  {
    id: 12,
    name: 'Group henna',
    description: 'Group henna for parties, weddings and holidays.',
    image: '/hennaPics/henna13.png'
  }
]

export default function Henna() {
  return (
    <div className={styles.myDiv}>
      <h1> <center> Henna Showcase </center></h1>
      <HennaGallery designs={designs} />
    </div>
  );
}


