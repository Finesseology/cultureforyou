import Image from 'next/image';
import styles from '../styles/hennashow.module.css';

function EngravingGallery({designs}){
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
            <h1> <center> Engraving </center></h1>
            <EngravingGallery designs={designs} />
          </div>
        );
        }
