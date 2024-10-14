import 'animate.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
    {
      title: "Takas.lk",
      description: "UI Design ",
      imgUrl: projImg1,
    },
    {
      title: "SalesSpot",
      description: "Mobile App Development",
      imgUrl: projImg2,
    },
    {
      title: "Takas.lk",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Takas.lk",
      description: "Design Interfaces",
      imgUrl: projImg1,
    },
    {
      title: "SalesSpot",
      description: "Mobile App Development",
      imgUrl: projImg2,
    },
    {
      title: "Takas.lk",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects Of Takas.lk</h2>
                <p>Step into a world of endless possibilities at Takas.lk, where you will find an extensive range of 
products spanning fashion, beauty, home, electronics, and more. Our platform serves as a 
digital marketplace, offering you a curated selection of top-tier brands and products that cater 
to your unique preferences and needs. Takas.lk stands as a dynamic online marketplace, 
offering a wide array of categories that cater to your diverse preferences. From fashion and 
beauty to home essentials and cutting-edge electronics, our platform provides an extensive 
range of products that you can easily explore and curate to match your needs. With Takas.lk, 
you're not just a shopper; you're an active participant. Customers can add, edit, and remove 
items from your shopping cart, ensuring that your selections perfectly align with your evolving 
preferences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                      <p>"Salespot" is an android mobile application developed by team salespot at Sri Lanka Institute of Information Technology -(2 nd year 2 nd semester )for the mobile application development module final project.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>"Salespot" is an android mobile application developed by team salespot at Sri Lanka Institute of Information Technology for the mobile application development module final project.</p>
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