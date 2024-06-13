import './GalleryCard.css';
import unsunkhero from '../../assets/unsunkhero.jpg';

export default function GalleryCard() {
    const style = {
        backgroundImage: `url(${unsunkhero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

  return (
    <div className="galleryCard" style={style}></div>
  )
}