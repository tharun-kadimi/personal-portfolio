import meter1 from "../Assets/img/meter1.svg";
import meter2 from "../Assets/img/meter2.svg";
import meter3 from "../Assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../Assets/img/arrow1.svg";
// import arrow2 from "../Assets/img/arrow2.svg";
import colorSharp from "../Assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in designing and implementing MongoDB databases,
                building RESTful APIs and web servers with Express.js, crafting
                interactive user interfaces with React.js, and developing
                server-side applications with Node.js. Experienced in version
                control (Git), responsive web design, deployment, and
                testing/debugging.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill 1 HTML & CSS" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill2 JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill 3 React.js" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 4 SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 5 MongoDB" />
                  <h5>Mongo DB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 6 Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 7 Git & GitHub" />
                  <h5>Git & GitHub</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bg-left" />
    </section>
  );
};
