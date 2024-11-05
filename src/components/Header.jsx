import logo from '../assets/logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={logo} />
                <h3>Sunarto Desain</h3>
                <p>Desain Autocad</p>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/accounts/login/?hl=en' target="_blank"><FaInstagram /></a>
                    <a href='https://g.co/kgs/WZrwXsG' target="_blank"><SiGoogleads /></a>
                    <a href='https://web.whatsapp.com/' target="_blank"><FaWhatsapp /> </a>
                    <a href='https://www.facebook.com/empritsine?mibextid=ZbWKwL' target="_blank"><FaFacebookF /></a>
                </div>
            </div>
        </header>
    )
}

export default Header