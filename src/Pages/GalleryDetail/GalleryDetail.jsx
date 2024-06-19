import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GalleryCard from '../../Components/GalleryCard/GalleryCard';
import './GalleryDetail.css';

export default function GalleryDetail() {
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

      const description = artwork?.attributes?.description?.[0]?.children?.[0]?.text || '';

  return (
    <div className="galleryDetailMain">
      <Link to="/gallery" className="backToGallery">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
        </svg>
      </Link>
      {artwork && <GalleryCard artworkDetails={artwork.attributes}/>} 
      <div className="artDesc">{description}</div>
    </div>
  )
}
