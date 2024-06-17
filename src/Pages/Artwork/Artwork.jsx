import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GalleryCard from '../../Components/GalleryCard/GalleryCard';
import './Artwork.css';

export default function Artwork() {
    const artworkIdObj = useParams();
    const artworkId = artworkIdObj['id'];

    const [artwork, setArtwork] = useState();

    useEffect(() => {
        if (artworkId) {
            async function getArtwork() {
            try {
                const response = await fetch(`http://localhost:1337/api/artworks/${artworkId}?populate=*`);
                if (!response.ok) {
                throw new Error('Response not ok.');
                }
                const data = await response.json();
                console.log(data.data);
                setArtwork(data.data);
            } catch (error) {
                console.error(error);
            }
            }
            getArtwork();
        }
      }, [artworkId]);

  return (
    <div className="artworkMain">
      {artwork && <GalleryCard artworkDetails={artwork.attributes}/>} 
    </div>
  )
}
