import './GetInTouch.css';
import { useNavigate } from 'react-router-dom';

export default function GetInTouch({ inFooter }) {

    const navigate = useNavigate();

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleGetInTouch() {
        navigate('/contact');
        scrollToTop();
    }

  return (
    <div className="getInTouch" onClick={handleGetInTouch}>Get In Touch</div>
  )
}