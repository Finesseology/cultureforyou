import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

//the Main Gallery Component of the Engravings
const EngravingGallery = () => {
    //an array of images that will be used in the code
    const images = [
        { url: '/index/Basketball.png', alt: 'Basketball', description: 'Temporary Description' },
        { url: '/index/CherryBlossomCup.png', alt: 'CherryBlossom', description: 'Temporary Description' },
        { url: '/index/EidGift.png', alt: 'EidGift', description: 'Temporary Description' },
        { url: '/index/engraving.png', alt: 'PeonyLilac', description: 'Temporary Description' },
        { url: '/index/FallGift.png', alt: 'FallGift', description: 'Temporary Description' },
        { url: '/index/FloralMug.png', alt: 'FloralMug', description: 'Temporary Description' },
        { url: '/index/FloralWreathWithButteries.png', alt: 'FloralWreathWithButteries', description: 'Temporary Description' },
        { url: '/index/HolographicOpalRamadanTumbler.png', alt: 'HolographicOpalRamadanTumbler', description: 'Temporary Description' },
        { url: '/index/HoneyBee.png', alt: 'HoneyBee', description: 'Temporary Description' },
        { url: '/index/LifeHappensMug.png', alt: 'LifeHappensMug', description: 'Temporary Description' },
        { url: '/index/Monstera.png', alt: 'Monstera', description: 'Temporary Description' },
        { url: '/index/PrettyInPink.png', alt: 'PrettyInPink', description: 'Temporary Description' },
        { url: '/index/PurpleCherryBlossom.png', alt: 'PurpleCherryBlossom', description: 'Temporary Description' },
        { url: '/index/RamadanLanternTumbler.png', alt: 'RamadanLanternTumbler', description: 'Temporary Description' },
        { url: '/index/RamadanTumbler.png', alt: 'RamadanTumbler', description: 'Temporary Description' },
        { url: '/index/RetroandWildflowerTumblers.png', alt: 'RetroandWildflowerTumblers', description: 'Temporary Description' },
        { url: '/index/SweaterWeatherCup.png', alt: 'SweaterWeatherCup', description: 'Temporary Description' },
        { url: '/index/TropicalCup.png', alt: 'TropicalCup', description: 'Temporary Description' },
        { url: '/index/Umair.png', alt: 'Umair' },
        { url: '/index/Wildflower.png', alt: 'Wildflower', description: 'Temporary Description' },
        { url: '/index/YellowFloralWreath.png', alt: 'YellowFloralWreath', description: 'Temporary Description' },
    ];

    // Defines the state for the currently selected image
    const [selectedImage, setSelectedImage] = useState(images[0]);

    // Handles a click on an image in the gallery
    const handleClick = (image) => {
        setSelectedImage(image);
    };

    //Will loop over each of the images in the array and display them with their description
    return (
        <div>
            <h1>Engraving Gallery</h1>
            <div className="images">
                {images.map((image, index) => (
                    <div key={index} onClick={() => handleClick(image)}>
                        <Image src={image.url} alt={image.alt} width={200} height={200} />
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
            <div className="selected-image">
                <Image src={selectedImage.url} alt={selectedImage.alt} width={200} height={200}/>
                <p>{selectedImage.description}</p>
            </div>
        </div>
    );
};

//exports the gallery
export default EngravingGallery;
