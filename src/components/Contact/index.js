import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = React.useState('text-animate')
    const form = React.useRef()

    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_25e1c4a',      
            'template_jsrbs2i',     
            form.current,
            'c3MldMb1kWWNvvEda'    
        )
        .then(() => {
            alert('Message sent successfully!');
            form.current.reset();  
        }, (error) => {
            alert('Failed to send the message, please try again.');
            console.error(error.text);
        });
    };

    return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15} 
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    large projects. However, if you have other requests or questions,
                    don't hesitate to contact me using the form below.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="user_name" placeholder='Name' required />
                            </li>
                            <li className="half">
                                <input type="email" name="user_email" placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>

                {/* Social links for small screens below the form */}
                <div className="social-small">
                    <ul>
                        <li>
                            <a href="https://github.com/DGREATEJ5" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dgreatej5/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/DGREATEJ05" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="info-map">
                Edmar Jan Gumtang,
                <br />
                Philippines,
                <br />
                Barangay Bacarrena <br />
                San Mateo, Isabela <br />
                <span>edmargumtang5@gmail.com</span>
            </div>

            <div className="map-wrap">
                <MapContainer center={[16.882268501313945, 121.58479076809988]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[16.882268501313945, 121.58479076809988]}>
                        <Popup>DGREATEJ5 lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Contact
