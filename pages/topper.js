// Henna Showcase page
// Clickable images lead to special-orders page
import Image from 'next/image';
import styles from '../styles/topper.module.css';

function TopperGallery({designs}) {
  return (
<div className={styles.grid}>
{designs.map((design) => (
  <div key={design.id} className={styles.topperPic}>
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



<center>
<h1 className={styles.titleH1}>  Cake Topper Shop </h1>
  <p className={styles.descP}> Looking to make your cake stand out? Check out our cake topper services below! </p>
<div className={styles.shopNavBarContainer}>
    <a href='./shop-layout' className={styles.shopNavBar}>All</a>
    <a  className={styles.shopNavBarLine}>|</a>
    <a href='./henna-showcase'  className={styles.shopNavBar}>Henna</a>
    <a className={styles.shopNavBarLine}>|</a>
    <a href='./topper' className={styles.active}>Topper</a>
    <a className={styles.shopNavBarLine}>|</a>
    <a href='./engraving-showcase' className={styles.shopNavBar}>Engraving</a>
    <a  className={styles.shopNavBarLine}>|</a>
    <a href='./wedding-sign' className={styles.shopNavBar}>Wedding Sign</a>
  </div>
  </center>


      <TopperGallery designs={designs} />
    </div>
  );
}
