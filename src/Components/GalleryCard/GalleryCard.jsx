import './GalleryCard.css';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function GalleryCard({ artwork, artworkDetails }) {
  const location = useLocation();
  const { pathname } = location;
  const isGalleryPage = pathname === '/gallery';

  const imageUrl = isGalleryPage ? (artwork.image ? artwork.image.url : '') : artworkDetails.image.data.attributes.url;

  const [zoomLevel, setZoomLevel] = useState('cover');
  const [backgroundPosition, setBackgroundPosition] = useState('center');
  const [hovered, setHovered] = useState(false);
  const [zoomActive, setZoomActive] = useState(false);

  useEffect(() => {
    // Reset zoom level and background position when the component mounts
    setZoomLevel('cover');
    setBackgroundPosition('center');
  }, []);

  const style = {
    backgroundImage: `url(http://localhost:1337${imageUrl})`,
    backgroundSize: zoomLevel,
    backgroundPosition: backgroundPosition,
    backgroundRepeat: "no-repeat",
  }

  const handleMouseEnter = (event) => {
    if (hovered) {
      setZoomLevel('200%');
      setZoomActive(true);
      updateBackgroundPosition(event);
    } else {
      setHovered(true);
    }
  };

  const handleMouseMove = (event) => {
    if (zoomActive) {
      updateBackgroundPosition(event);
    }
  };

  const handleMouseLeave = () => {
    if (zoomActive) {
      setZoomLevel('cover');
      setBackgroundPosition('center');
      setZoomActive(false);
    }
  };

  const updateBackgroundPosition = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (event.pageX - left) / width * 100;
    const y = (event.pageY - top) / height * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  }

  return (
    <div>
      {isGalleryPage ? (
          <Link to={`/gallery/${artwork.id}`}>
            <div className="galleryCard" 
            style={style}
            >
              <p className="artworkTitle">{artwork.title}</p>
            </div>
          </Link>
      ) : (
          <div 
            className="galleryCardBig" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove} 
            style={style}
          >
            <p className="artworkTitle">
              {artworkDetails.title}
            <p className="artworkYear">
              {artworkDetails.year}
            </p>
            </p>
          </div>
      )}
    </div>
  )
}