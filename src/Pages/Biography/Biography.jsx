import BioPic from '../../Components/BioPic/BioPic';
import './Biography.css';

export default function Biography() {
  return (
    <div className="biographyMain">
        <div className="picContainer">
            <BioPic />
        </div>
        <div className="bioText">
            <h1 className="bioHeading">About Anna</h1>
            <p className="bioBody">Anna Kyriacou graduated from Edinburgh College of Art where she completed a degree in illustration and was especially granted an additional studio in the Fine Art department.

            Now based in Brighton, Anna has exhibited her work in various parts of the UK including Edinburgh and London.  For the last two years Anna has taken part in ‘Show Below’ an award winning exhibition by a group of 10 artists.  This takes place during the Brighton Fringe Festival and this year Anna won the 2-D Catorgory of the Visual Arts Prize.  She also received an Argus Angel Award for artistic excellence.  In 2007 Anna won second place in the Visual Arts Prize.

            Anna has worked on editorial and advertising commissions and had her work featured in a variety of magazines including Ape and I-D.

            At first glance, Anna’s seductively simple art-works look like the imagery we remember from our childhood.  Yet her crude lines and unrestricted language invite us into a dialogue of dualities, taking us on a journey that both messes things up and harmonises dichotomies.

            Anna feels that everyone’s experience of childhood is unique and complex, which although her images hold personal resonance, is how she hopes people will experience her imagery.  The work looks at what children do in a way that rejects and simultaneously observes the boundaries that adults often create when dealing with children and their representation.  Anna approaches the subject of sexuality with sensitivity, entering a spiritual exploration, journeying through social and religious limitation and tapping into a wider and wiser universal consciousness.  Anna does not claim that her work has ‘the answer,’ instead it offers us space to consider, remember and experience the intriguing world of childhood.
            </p>
        </div>
    </div>
  )
}
