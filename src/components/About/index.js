import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import './custom.css'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = React.useState('text-animate')

    React.useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>

        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a passionate software engineer who loves building AI-driven applications
            that solve real-world problems. My focus areas include natural language
            processing, computer vision, and automation — blending creativity with
            technical expertise to develop efficient, scalable systems.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <i class="fa-brands fa-aws aws"></i>
                    </div>
                    <div className="face2">
                        <i class="fa-brands fa-java java"></i>
                    </div>
                    <div className="face3">
                        <i class="fa-brands fa-js js"></i>
                    </div>
                    <div className="face4">
                        <i class="fa-brands fa-react react"></i>
                    </div>
                    <div className="face5">
                        <i class="fa-brands fa-git-alt git"></i>
                    </div>
                    <div className="face6">
                        <i class="fa-brands fa-python python"></i>
                    </div>
                </div>
            </div>
        </div>

        <Loader type="pacman" />
        </>
    )
}


export default About