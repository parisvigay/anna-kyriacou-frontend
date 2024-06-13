import GalleryCard from '../../Components/GalleryCard/GalleryCard';
import './Gallery.css';

export default function Gallery() {
  return (
    <div className="galleryMain">
        <div className="galleryCardContainer">
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
            <GalleryCard />
        </div>
    </div>
  )
}