import { useState, useEffect } from 'react';
import GalleryCard from '../../Components/GalleryCard/GalleryCard';
import './Gallery.css';

export default function Gallery() {
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    async function getArtwork() {
      try {
        const response = await fetch('http://localhost:1337/api/artworks?populate=*');
        if (!response.ok) {
          throw new Error('Response not ok.');
        }
        const data = await response.json();
        console.log(data);
        setArtwork(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getArtwork();
  }, []);
  
  return (
    <div className="galleryMain">
        <div className="galleryCardContainer">
            {artwork.map((item) => (
              <GalleryCard key={item.id} artwork={item} />
            ))}
        </div>
    </div>
  )
}