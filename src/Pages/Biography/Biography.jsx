import BioPic from '../../Components/BioPic/BioPic';
import GetInTouch from '../../Components/GetInTouch/GetInTouch';
import './Biography.css';

export default function Biography() {
  return (
    <div className="biographyMain">
        <div className="picAndBioContainer">
            <div className="picContainer">
                <BioPic />
                <GetInTouch inFooter={false}/>
            </div>
            <div className="bioText">
                {/* <h1 className="bioHeading">About Anna</h1> */}
                <p className="bioBody">Award winning artist Anna Kyriacou’s exploration of the human condition dates back 
                    to as early as her Art Foundation training in 1992, this carried through her degree at Edinburgh College 
                    of Art and still continues. Her ability to traverse, at times, challenging subject matter with delicacy was 
                    frequently acknowledged as one of the reasons for the awards she has received. Anna’s artwork predominantly 
                    embraces the subject of childhood but is not strictly about the child. It also speaks of the embodied child 
                    within the adult; the deep resonance of our early experiences that shape us and impact our lives. Anna’s work 
                    at times includes highly technical, labour intensive pieces where she enjoys the meditative process of working 
                    in great detail. At other times her imagery is spontaneous and gestural and expressed with immediacy. Her 
                    seductively simple drawings are reminiscent of children’s artwork almost appearing as though the child in the 
                    image is expressing their own narrative. Anna’s emotionally and psychologically driven artworks externalises 
                    people’s internal experience with sensitivity; contributing to a wider and wiser consciousness.
                </p>
                <p className="bioBody">In 2007 Anna received an award for 2nd place in the Visual Arts Prize at the Brighton Fringe 
                    Festival for her collection of artworks exhibited. In 2008 she secured first place for the same award. Also in 
                    2008 she received an Argus Angel Award for Artistic Excellence. That same year the group exhibition she took part 
                    in also won an award for being the 2nd best show in the festival.
                </p>
                <p className="bioBody">Anna’s deep interest in the complexity of the human experience led her to begin training as a 
                    psychotherapist in 2010. She eventually qualified as a Psychodynamic therapist, later integrating this with other 
                    fields of psychotherapy, including working with trauma, art and body-based practices. She is also a clinical 
                    supervisor to other therapists. Entering this world further embedded Anna in her passion for supporting people to 
                    process and navigate life’s adversities.
                </p>
                <p className="bioBody">When Anna began her therapy training the production of new artworks was put on hold. After this, 
                    apart from the occasional commission and taking part in a London show (where she exhibited alongside Banksy, The 
                    Chapman Brothers, Peter Blake, Damien Hirst and other established and emerging artists), she mostly focussed on 
                    building up her practice as a therapist. In 2020 Anna undertook an Art Therapy Foundation training at Goldsmiths 
                    University of London, so she could offer creative arts therapy groups as part of her work as a psychotherapist at 
                    the University of Sussex. On this training Anna was exposed to both clinical case studies and imagery produced by 
                    Art Therapy patience and immediately her two worlds came together. Anna’s passion for child-like expressions, so 
                    often seen in her work, was re-ignited and this became a catalyst for a new series of drawings, paintings and 
                    sculpture, which is an extension of her deep exploration of the human experience. She is yet to share this new 
                    collection, but will of course, in due course. Anna currently works from her studio in Brighton.
                </p>
            </div>
        </div>
        <div className="showsContainer">
            {/* <h2 className="showsHeading">Exhibitions</h2> */}
            <div className="soloShows">
                <h3 className="showsSubHeading">Solo shows</h3>
                <ul className="showsUl">
                    <li className="showsText">2010 Homemade Hero - Oblong Gallery, Islington, London</li>
                    <li className="showsText">2008 Aarrh! Is For Revenge - Oblong Gallery, Islington, London</li>
                    <li className="showsText">2003 Play Horsey - New Inn Gallery, Hoxton, London</li>
                    <li className="showsText">2002 No Ball Games - Coningsby Gallery, West London</li>
                    <li className="showsText">2000 Prima Petita - Crockfords Gallery, Falmouth, Cornwall</li>
                </ul>
            </div>
            <div className="groupShows">
                <h3 className="showsSubHeading">Group shows</h3>
                <ul className="showsUl">
                    <li className="showsText">2014 Mix - Lawrence Alkin Gallery, West London - Alongside Banksy, 
                        The Chapman Brothers, Peter Blake, Damien Hirst and others.</li>
                    <li className="showsText">2009 Deity - IO Gallery, Brighton</li>
                    <li className="showsText">2009 First Anniversary - Oblong Gallery, Islington, London - Alongside 
                        Julian Opie, Stephen Gregory and Gareth Williams</li>
                    <li className="showsText">2008 Show Below - Frieze Green Gallery, Brighton</li>
                    <li className="showsText">2007 INK’D Gallery Christmas Show - INK’D Gallery, Brighton</li>
                    <li className="showsText">2007 Show Below - Frieze Green Gallery, Brighton</li>
                    <li className="showsText">2002 Eyejam - Ogilvy and Mather, Docklands, London</li>
                    <li className="showsText">2001 Candid - Candid Arts Gallery, London</li>
                    <li className="showsText">1997 Selected Edinburgh Graduates - Group show - Coningsby Gallery, 
                        West End, London</li>
                    <li className="showsText">1997 Graduates Summer Show - Edinburgh College of Art, Edinburgh - 
                        sold series of oil paintings to art collector.</li>
                </ul> 
            </div>
        </div>
        <div className="bioBodyBottomContainer">
            <p className="bioBody">Anna has worked on editorial and advertising commissions and had her work featured in a variety of magazines including Ape and I-D.</p>
        </div>
    </div>
  )
}
