import LogoTitle from "../../assets/images/E-logo4.png";
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = React.useState('text-animate')
    const nameArray = ['d', 'm', 'a', 'r', ' ', 'J', 'a', 'n']
    const jobArray = ['A', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v','e', 'l', 'o', 'p', 'e', 'r', '.']

    React.useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" className="Logo" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={15} />
                < br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray} 
                idx={23} />
                </h1>
                <h2>Frontend Developer / React Expert</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home