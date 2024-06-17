import './GalleryCard.css';
import { useLocation, Link } from 'react-router-dom';

export default function GalleryCard({ artwork, artworkDetails }) {
  const location = useLocation();
  const { pathname } = location;
  const isGalleryPage = pathname === '/gallery';

  console.log(artwork, artworkDetails); 

  const imageUrl = isGalleryPage ? artwork.attributes.image.data.attributes.url : artworkDetails.image.data.attributes.url;

  const style = {
      backgroundImage: `url(http://localhost:1337${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
  }

  return (
    <div>
      {isGalleryPage ? (
          <Link to={`/artwork/${artwork.id}`}>
              <div className="galleryCard" style={style}>
                  <p className="artworkTitle">{artwork.attributes.title}</p>
              </div>
          </Link>
      ) : (
          <div className="galleryCardBig" style={style}>
              <p className="artworkTitle">{artworkDetails.title}</p>
          </div>
      )}
    </div>
  )
}