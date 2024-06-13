import './Carousel.css';
import unsunkhero from '../../assets/unsunkhero.jpg';
import unsunkdrawing from '../../assets/unsunkdrawing.jpeg';
import { useState } from 'react';

export default function Carousel() {
  const [currentId, setCurrentId] = useState(0);

  const slides = [
    unsunkhero,
    unsunkdrawing
  ];  

    const style = {
        backgroundImage: `url(${slides[currentId] })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

  function prevId() {
    const isfirstSlide = currentId === 0;
    const newId = isfirstSlide ? slides.length - 1 : currentId - 1;
    setCurrentId(newId);
  }

  function nextId() {
      const isLastSlide = currentId === slides.length - 1;
      const newId = isLastSlide ? 0 : currentId + 1;
      setCurrentId(newId);
  }

  return (
    <div className="carouselContainer" style={style}>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16" id="leftArrow" onClick={prevId}>
          <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16" id="rightArrow" onClick={nextId}>
          <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
        </svg>
    </div>
  )
}