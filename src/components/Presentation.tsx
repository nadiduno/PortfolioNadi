import styles from './Presentation.module.css'

export function Presentation() {
    return (
        <>
            <strong className="text-violet-700 text-3xl">
                Connecting people through
                <strong className="text-green-300 text-3xl">
                    &nbsp;education&nbsp;
                </strong>
                and technology
            </strong>
            <span className="text-white">
                Meu nome é Nadiveth Elena Duno Escalona, sou Venezuelana, atualmente,
                moro em Salvador, Bahia.
                <br />
                <br />
                Formada em TI e tenho experiência no desenvolvimento de projetos
                sociais.
            </span>
        </>
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
