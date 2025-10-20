import './index.scss';
import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Pic from '../../assets/images/mypic.png';

const Work = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container work-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Work Experience".split("")}
            idx={15}
          />
        </h1>

        <div className="cont">
          <div className="cont-con1">
            <p>
              I worked as a <strong>Software Engineer Intern</strong> where I contributed to
              monitoring systems and analysis using <strong>Grafana</strong> and
              <strong> golden signals</strong>. I also enhanced my backend,
              AI, Cloud, and DevOps development skills through various projects and learning modules.
            </p>
          </div>

          <div className="cont-con2">
            <div className="img-container">
              <div className="shape square"></div>
              <div className="shape triangle"></div>
              <div className="shape circle"></div>
              <img src={Pic} alt="Work Experience" className="pic-con" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Work;
