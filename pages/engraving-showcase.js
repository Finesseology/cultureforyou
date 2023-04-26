import Image from 'next/image';
import styles from '../styles/engraving-show.module.css';

function EngravingGallery({designs}){
    return (
  <div className={styles.grid}>
    {designs.map((design) => (
      <div key={design.id} className={styles.engravingPic}>
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

// an array of engraving images with their attributes
const designs = [
    {
      id: 1,
      name: 'Sports Engraving',
      description: 'Request your favorite sport team as your engraving',
      image: '/index/Basketball.png'
    },
    {
      id: 2,
      name: 'Glass Engraving',
      description: 'Request a design for your favorite glass mug',
      image: '/index/LifeHappensMug.png'
    },
    {
        id: 3,
        name: 'Floral Design',
        description: 'A trendy floral style that has just the right touch',
        image: '/index/PurpleCherryBlossom.png'
    },
    {
        id: 4,
        name: 'Miscellaneous Design',
        description: 'For any other design request you may have',
        image: '/index/HolographicOpalRamadanTumbler.png'
      },
    ]

    export default function Engraving() {
        return (
          <div className={styles.myDiv}>
<center>
<h1 className={styles.titleH1}>  Engraving Shop </h1>
  <p className={styles.descP}> Looking to get some engravings? Check out our engraving services below! </p>
      <div className={styles.shopNavBarContainer}>
					<a href='./shop-layout' className={styles.shopNavBar}>All</a>
					<a  className={styles.shopNavBarLine}>|</a>
					<a href='./henna-showcase'  className={styles.shopNavBar}>Henna</a>
					<a className={styles.shopNavBarLine}>|</a>
					<a href='./topper' className={styles.shopNavBar}>Topper</a>
					<a className={styles.shopNavBarLine}>|</a>
					<a href='./engraving-showcase' className={styles.active}>Engraving</a>
					<a  className={styles.shopNavBarLine}>|</a>
					<a href='./wedding-sign' className={styles.shopNavBar}>Wedding Sign</a>
				</div>
        </center>


            
            <EngravingGallery designs={designs} />
          </div>
        );
        }
