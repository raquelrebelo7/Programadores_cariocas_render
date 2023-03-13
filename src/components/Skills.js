import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="aprendizagem">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Aprendizagem</h2>
                        <p>Ao longo de 6 meses, os alunos desenvolverão Front-end, Soft skills e Back-end. Sendo assim, terão a oportunidade de ter aulas com profissionais qualificados que utilizarão melhores métodos de aprendizagem e compreensão da necessidade do mercado de trabalho.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Front-end</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Soft Skills</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Back-end</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
