import Image from 'next/image';
import styles from '../styles/topper.module.css';
import React, { useState, useEffect } from 'react';

function TopperGallery({designs}) {
  return (
<div className={styles.grid}>
{designs.map((design) => (
  <div key={design.id} className={styles.topperPic}>
   <a className={styles.textA}  href="/special-orders" id ="special-orders-link"> 
   <Image className={styles.imgStyles} src= {`/topperPics/${design.imageName}`} width={225} height={250} alt={design.imageName} />
    <div className={styles.p}>
    <h2 className={styles.titleH2}>{design.imageTitle}</h2>
    <p className={styles.descP}>{design.imageDesc}</p>
    </div>
    </a>
  </div>
))}
</div>
  );
}



export default function Toppers() {
  
    const [designs, setDesigns] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async (imageType) => {
        try {
          const url = `./api/shop-images?imageType=${imageType}`;
  
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            const res = await response.json();
  
            let idCounter = 1; // Initialize an ID counter
  
            const newDesigns = res.shopimages.map((design) => ({
              id: idCounter++, // Assign and increment the ID
              imageName: design.imageName,
              imageType: design.imageType,
              imageTitle: design.imageTitle,
              imageDesc: design.imageDesc,
              image: design.image, 
            }));
  
            setDesigns(newDesigns);
            setLoading(false);
            console.log('Designs fetched successfully');
          } else {
            console.error('Error fetching designs');
            setLoading(false);
          }
        } catch (error) {
          console.error('Network error:', error);
          setLoading(false);
        }
      };
  
      const imageType = 'topper';
      fetchData(imageType);
    }, []);
  

  return (
    <div className={styles.myDiv}>



<center>
<h1 className={styles.titleH1}>  Cake Topper Shop </h1>
  <p className={styles.descP}> Looking to make your cake stand out? Check out our cake topper services below! </p>
<div className={styles.shopNavBarContainer}>
    <a  className={styles.shopNavBarLine}>|</a>
    <a href='./henna-showcase' id = "henna-showcase-link"  className={styles.shopNavBar}>Henna</a>
    <a className={styles.shopNavBarLine}>|</a>
    <a href='./topper' id = "topper-showcase-link" className={styles.active}>Topper</a>
    <a className={styles.shopNavBarLine}>|</a>
    <a href='./engraving-showcase' id = "engraving-showcase-link" className={styles.shopNavBar}>Engraving</a>
    <a  className={styles.shopNavBarLine}>|</a>
    <a href='./wedding-sign' id = "wedding-sign-showcase-link" className={styles.shopNavBar}>Wedding Sign</a>
  </div>
  </center>


 

  <div className={styles.centerContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TopperGallery designs={designs} />
        )}
      </div>
    </div>
  );
}

