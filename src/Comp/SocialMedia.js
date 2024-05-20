import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import fbicon from '../images/fbicon2.png';
import twittericon from '../images/twittericon2.png';
import linkedinicon from '../images/linkedinicon2.png';
export default function SocialMedia(){
    return(
        <div className="socialmedia">
            <Link to="https://www.facebook.com/"><img className='img-fluidd' src={fbicon}></img></Link>
            <Link to="https://x.com/?lang=en-in"><img className='img-fluidd' src={twittericon}></img></Link>
            <Link to="https://www.linkedin.com/in/sudiksha-gandhi-4a9387237/"><img className='img-fluidd' src={linkedinicon}></img></Link>
        </div>
    );
}