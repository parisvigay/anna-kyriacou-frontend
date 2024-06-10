import './Carousel.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import unsunkhero from '../../assets/unsunkhero.jpg';

export default function Carousel() {
    const style = {
        backgroundImage: `url(${unsunkhero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "45vh",
        // width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    }

  return (
    <div className="carouselContainer" style={style}>
        <NavigateBeforeIcon id="leftArrow"/>
        <NavigateNextIcon id="rightArrow"/>
    </div>
  )
}