import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoE from '../../assets/images/E-logo4.png'
import LogoSubtitle from "../../assets/images/logo-sub2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
 
const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoE} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d43" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d43" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d43" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="https://github.com/DGREATEJ5" target="_blank" rel="nonereferrer">
                    <i class="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/dgreatej_05" target="_blank" rel="nonereferrer">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/DGREATEJ05" target="_blank" rel="nonereferrer">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar