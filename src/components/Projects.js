import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/StayFair.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/travella.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "StayFair",
      description: "hotel booking website",
      imgUrl: projImg1,
    },
    {
      title: "Travella",
      description: "bus booking website",
      imgUrl: projImg3,
    },
     {
      title: "Portfolio",
      description: "Portfolio website",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Proficient in full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js) as well as ASP.NET with SQL Server and C#. Experienced in building dynamic, database-driven applications with clean UI/UX using HTML, CSS, and JavaScript. Skilled in deploying projects through platforms like Vercel and Netlify. Passionate about creating scalable, responsive, and real-time web applications using modern development practices.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
