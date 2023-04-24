// Henna Showcase page
// Clickable images lead to special-orders page
import Image from 'next/image';
import styles from '../styles/topper.module.css';

function TopperGallery({designs}) {
  return (
    <div className={styles.grid}>
      {designs.map((design) => (
        <div key={design.id} className={styles.topperPic}>
          <a href="/special-orders"> 
            <Image src={design.image} width={380} height={400} alt={design.name} />
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
    name: 'Wedding',
    description: 'Beautiful and elegant wedding cake toppers.',
    image: '/topperPics/topper0.png'
  },
  {
    id: 2,
    name: 'Graduation',
    description: ' Stylish cake toppers for graduation.',
    image: '/topperPics/topper2.png'
  },
  {
    id: 3,
    name: 'Other Special Occasions',
    description: 'Unique and customizable cake toppers for any special occasion.',
    image: '/topperPics/topper1.png'
  },
  
];

export default function Toppers() {
  return (
    <div className={styles.myDiv}>
      <h1> <center> Cake Toppers </center></h1>
      <TopperGallery designs={designs} />
    </div>
  );
}
