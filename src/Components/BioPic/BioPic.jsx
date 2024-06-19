import './BioPic.css';
import annaHeadshot from '../../assets/annaHeadshot.png';

export default function BioPic() {
    const style = {
        backgroundImage: `url(${annaHeadshot})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

  return (
    <div className="imgCard" style={style}>

    </div>
  )
}
