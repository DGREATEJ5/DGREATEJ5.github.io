import './index.scss';
import './custom.css'
import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Pic from '../../assets/images/cons.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {

    const [letterClass, setLetterClass] = React.useState('text-animate')

    React.useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15} 
                />
            </h1>
            <div className="cont">
                <div className="cont-con1">
                <h6>Under Construction</h6>
                <p>
                    This section is under construction, but we are ready to go! I'm preparing something amazing and exciting for you. Contact me for more details.
                </p>
                </div>
                <div className="cont-con2">
                    <img src={Pic} alt="construction-pic" className="pic-con" />
                </div>
            </div>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>

        <Loader type="pacman" />
        </>
    )
}

export default Portfolio