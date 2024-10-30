// Import necessary modules and components
import 'animate.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import newImg1 from "../assets/img/new-img1.jpg";  // New image import
import newImg2 from "../assets/img/new-img2.jpg";  // New image import
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Project data for Tab 1
  const projects = [
    { title: "Takas.lk", description: "UI Design", imgUrl: projImg1 },
    { title: "SalesSpot", description: "Mobile App Development", imgUrl: projImg2 },
    { title: "Takas.lk", description: "Design & Development", imgUrl: projImg3 },
  ];

  // New data for Tab 2
  const newProjects = [
    { title: "New Project 1", description: "Web Design", imgUrl: newImg1 },
    { title: "New Project 2", description: "Branding", imgUrl: newImg2 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects Of Takas.lk</h2>
                  <p>
                    Explore our projects, spanning across UI design, mobile development, branding, and more.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      {/* Tab 1 Content */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 2 Content */}
                      <Tab.Pane eventKey="second">
                      <p>
                      There is image 1, which is my figma design sample. It makes a very simple art board. and I used image blending, grid layout, auto layout, etc.
                       The next one is img2, that is, we created a virtual network platform using Linux and Fedora for the network design management module.
                        </p>
                        <Row>
                          {newProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 3 Content */}
                      <Tab.Pane eventKey="third">
                        <p>
                          "SalesSpot" is an Android mobile application developed by team SalesSpot at the Sri Lanka 
                          Institute of Information Technology for the mobile application development module final project.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decoration" />
    </section>
  );
};
