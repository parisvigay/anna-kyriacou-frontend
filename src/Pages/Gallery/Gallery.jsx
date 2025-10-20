import { useState, useEffect } from 'react';
import GalleryCard from '../../Components/GalleryCard/GalleryCard';
import './Gallery.css';
import Login from '../../Components/Login/Login';
import { logout } from '../../Components/Logout/Logout';

export default function Gallery() {
  const [artwork, setArtwork] = useState([]);
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
    
    async function fetchArtworks() {
      try {
        const url = token ? 
          'http://localhost:1337/api/artworks?populate=*' :
          'http://localhost:1337/api/artworks?public=true&populate=image'

        const response = await fetch(url, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (!response.ok) {
          throw new Error('Error fetching artwork');
        }

        const data = await response.json();
        setArtwork(data.data.attributes.results);

      } catch (error) {
        console.error('Fetch artwork error:', error);
      }
    }
    fetchArtworks();
  }, [loggedIn]); // Re-fetch artworks when login status changes


  const handleLoginClick = () => {
    setShow(true);
  };

  const handleLogout = () => {
    logout(); // Call the logout function to remove token from localStorage
    setLoggedIn(false); // Update loggedIn state to false after logout
    setShow(false);
  };

  const handleCheckToken = () => {
    const token = localStorage.getItem('token');
  }

  return (
    <div className="galleryMain">
        <div className="signInBtnContainer">
          { loggedIn ? 
            <div className="loginBtn" onClick={handleLogout}>Logout</div> :
            <div className="loginBtn" onClick={handleLoginClick}>Login</div>
          }
        </div>
        <Login showModal={show} setShowModal={setShow} setLoggedIn={setLoggedIn}/>
        <div className="galleryCardContainer">
          {artwork && artwork.length > 0 && artwork.map((item) => (
            <GalleryCard key={item.id} artwork={item} />
          ))}
        </div>
    </div>
  )
}