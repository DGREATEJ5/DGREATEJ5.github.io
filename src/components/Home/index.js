import LogoTitle from "../../assets/images/E-logo4.png";
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';
import resume from '../../assets/resume/Resume - Gumtang, Edmar Jan B..pdf';

const Home = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate');
    const nameArray = ['d', 'm', 'a', 'r', ' ', 'J', 'a', 'n'];
    const jobArray = ['A', ' ','S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

    React.useEffect(() => {
        setLetterClass('text-animate');
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'</span>
                        <span className={`${letterClass} _16`}>m</span>
                        <img src={LogoTitle} alt="developer" className="Logo" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={17}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={25}
                        />
                    </h1>
                    <h2>Software Engineer / Backend & AI Developer</h2>
                    
                    {/* Resume Download Button */}
                    <a href={resume} download='Resume - Gumtang, Edmar Jan B..pdf' className="flat-button">
                        DOWNLOAD RESUME
                    </a>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Home;
