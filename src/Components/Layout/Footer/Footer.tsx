import "./Footer.css";
 import { FaSquareFacebook,FaSquareTwitter,FaLinkedin } from "react-icons/fa6";


function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
			<p>THIS IS FOOTER &copy; All rights reserved to John Bryce {year} </p>
            <a href=""  ><FaSquareFacebook size={25}/></a>
            <a href=""  ><FaSquareTwitter size={25}/></a>
            <a href=""  ><FaLinkedin size={25}/></a>
        </div>
    );
}

export default Footer;
