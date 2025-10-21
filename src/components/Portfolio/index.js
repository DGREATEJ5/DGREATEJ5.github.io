import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

import Librarian from '../../assets/projects/libraian.png';
import HealthifyAI from '../../assets/projects/healthifyai.png';
import BrandifyAI from '../../assets/projects/brandifyai.png';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'HealthifyAI',
      img: HealthifyAI,
      desc: 'An AI-powered health assistant that provides personalized responses and suggestions using a RAG pipeline with Gemini LLM, LangChain, Pinecone, and FastAPI — all deployed on AWS.',
      tools: ['Python', 'LangChain', 'LLMs', 'Gemini', 'RAG', 'Flask', 'AWS'],
      link: 'https://github.com/DGREATEJ5/HealthifyAI',
    },
    {
      title: 'BrandifyAI',
      img: BrandifyAI,
      desc: 'A brand intelligence app that analyzes tone, keywords, and visuals using OpenAI and Gemini APIs. Built with Next.js, integrated with AWS CDK, and deployed through API Gateway for scalability.',
      tools: ['Python', 'OpenAI', 'Next.js', 'TypeScript', 'AWS CDK', 'AWS Lambda', 'API Gateway'],
      link: 'https://brandify-ai-ddyj.vercel.app/',
    },
    {
      title: 'Library NLP System',
      img: Librarian,
      desc: 'An NLP-based library system that automates the abstracting, cataloging, and classification of academic theses using OCR, TF-IDF, and spaCy NER. Integrated with Gemini for context understanding and built with Flutter and Firebase.',
      tools: ['Python', 'spaCy', 'OCR', 'Gemini', 'Flutter', 'Firebase', 'Heroku', 'Selenium'],
      link: 'https://github.com/DGREATEJ5/Libraian-App',
    },
  ];

  return (
    <>
      <div className="container portfolio-page">
        <div className="portfolio-content">
          {/* LEFT SIDE - fixed */}
          <div className="intro">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'My Projects'.split('')}
                idx={15}
              />
            </h1>
            <p>
              A showcase of intelligent systems I’ve built — combining AI models,
              NLP pipelines, and real-time integrations to solve complex problems
              in automation, branding, and knowledge management.
            </p>
          </div>

          {/* RIGHT SIDE - scrollable */}
          <div className="projects-scroll">
            <div className="projects-list">
              {projects.map((proj, i) => (
                <a
                  key={i}
                  href={proj.link}
                  className="project-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="thumb">
                    <img src={proj.img} alt={proj.title} />
                  </div>
                  <div className="details">
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                    <div className="tags">
                      {proj.tools.map((tool, t) => (
                        <span key={t}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Portfolio;
