import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom'
// import { AppMeType } from '../components/ApplicationMe'
import styles from './Presentation.module.css'

import logoStyled from '../assets/logoStyledComponent.svg'
import logoTypeScript from '../assets/logoTypescript.svg'
import logoMongoDB from '../assets/logoMongoDB.svg'
import logoPython from '../assets/logoPython.svg'
import logoSQL from '../assets/logoSQL.svg'
import logoSass from '../assets/logoSass.svg'
import logoFigma from '../assets/logoFigma.svg'
import logoGitBash from '../assets/logoGitBash.svg'
import logoGitHub from '../assets/logoGitHub.svg'
import logoJupyter from '../assets/logoJupyter.svg'
import logoPowerBI from '../assets/logoPowerBI.svg'
import logoReact from '../assets/logoReact.svg'



let logos: string[] = [`${logoPython}`, `${logoSQL}`, `${logoMongoDB}`, `${logoJupyter}`, `${logoPowerBI}`, `${logoReact}`, `${logoTypeScript}`, `${logoStyled}`, `${logoSass}`, `${logoFigma}`, `${logoGitBash}`, `${logoGitHub}`]



export function Presentation() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Sou Cientista de Dados', 'Sou Desenvolvedora web', 'Sou Professora de TI'];

  useEffect(() => {
    // Atualiza o índice do texto a cada 20 segundos
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.layout}>
      <main className={styles.wrapper}>
        <div className={styles.boxmain}>
          <div className={styles.box1}>

            <p className={styles.textdynamic}>{texts[textIndex]}</p>

            <span>Conectando </span>
            <span className={styles.text2}>pessoas </span>
            <span>através da Educação e a Tecnologia.</span>
            <br />
            <br />
            <p>Apaixonada  {'<💜/>'} por criar soluciones usaveis e accesiveis.</p>
            <p className={styles.text1}>Tech</p>
            <div className={styles.wrap}>
              {logos.map((logo, index) => (
                
                <img
                  key={index}
                  src={logo}
                  // alt={`Logo ${index}`}
                  title={logo.replace(/^.*\/?logo/, '').split('.')[0]}
                  className={styles.logoteach}
                />
              ))}
            </div>

          </div>
        </div>
      </ main>
    </div>

  )
}




import Carousel from 'react-bootstrap/Carousel';

export function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="src/assets/nadicode.png" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        2
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        3
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
