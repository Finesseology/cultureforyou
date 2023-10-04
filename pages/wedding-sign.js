import Image from 'next/image';
import styles from '../styles/wedding-signs.module.css';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

function SignsGallery({ designs }) {
  return (
    <div className={styles.grid}>
    {designs.map((design) => (
      <div key={design.id} className={styles.weddingSignPic}>
       <a className={styles.textA}  href="/special-orders"> 
        <Image className={styles.imgStyles} src= {`/weddingsPics/${design.imageName}`} width={225} height={250} alt={design.imageName} loading="lazy"/>
        
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


export default function WeddingSigns(){

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
            image: design.image, // You should include this property if it's required
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

    const imageType = 'weddingSign';
    fetchData(imageType);
  }, []); // Empty dependency array means this effect runs once when the component mounts

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
          <div className={styles.centerContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <SignsGallery designs={designs} />
        )}
      </div>
        </div>
      );
}