import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Card, Row, Col, ListGroup, ProgressBar, Breadcrumb, Image, Table } from "react-bootstrap";

function App() {
  var menu = { fontSize: "14px", padding: "8px 5px 8px 20px", textAlign: "left" };
  return (
    <Container>
      <Row>
        <Col lg={4} className=" d-none d-lg-block d-xl-none d-xl-block">
          <Card className="position-fixed" style={{ width: "17rem" }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/IMG_Profile.png"} />
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item style={{ paddingTop: "4px", paddingBottom: "4px" }} action href="#Roger_Montilla">
                  <div className="title text-center card-title">Roger Montilla</div>
                </ListGroup.Item>
                <ListGroup.Item style={menu} action href="#Academic">
                  Academic Achievements
                </ListGroup.Item>
                <ListGroup.Item style={menu} action href="#Languages">
                  Languages
                </ListGroup.Item>
                <ListGroup.Item style={menu} action href="#Professional_Experience">
                  Profesional Experience
                </ListGroup.Item>
                <ListGroup.Item style={menu} action href="#Other_Courses">
                  Other Courses
                </ListGroup.Item>
                <ListGroup.Item style={menu} action href="#Skills">
                  Skills
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: "center" }}>
                  <a target="_blank" href="https://github.com/rogermontilla01">
                    <img src={process.env.PUBLIC_URL + "/github.svg"} width="30px" />
                  </a>
                  <a
                    style={{ marginLeft: "15px" }}
                    target="_blank"
                    href="https://www.linkedin.com/in/roger-montilla-01/"
                  >
                    <img src={process.env.PUBLIC_URL + "/linkedin.svg"} width="30px" />
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8} style={{ backgroundColor: "#ffffff", borderRadius: "5px", padding: "30px" }}>
          <div className="d-sm-block d-md-none d-md-block d-lg-none d-xs-block">
            <Image className="img-fluid" src={process.env.PUBLIC_URL + "/Banner.png"} rounded />
            <br />
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="#Academic">Academic Achievements</Breadcrumb.Item>
              <Breadcrumb.Item href="#Languages">Languages</Breadcrumb.Item>
              <Breadcrumb.Item href="#Professional_Experience">Professional Experience</Breadcrumb.Item>
              <Breadcrumb.Item href="#Other_Courses">Other Courses</Breadcrumb.Item>
              <Breadcrumb.Item href="#Skills">Skill</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="title" id="Roger_Montilla">
            Who Am I
          </div>
          <hr></hr>
          <p className="text">
            I am a professional with over 9 years of experience in the telecommunications field and a new technology
            enthusiast. I headed the Implementations and Deployment Department for a mobile phone company, where I
            gained experience, knowledge, and technical skills. I enjoy working with free software and I have used Linux
            since I had my first PC. Currently, I focus on networking and web development, with a strong interest in Backend and
            DevOps.
          </p>
          <Row>
            <Col lg={6} md={12}>
              <Table striped bordered hover size="sm" className="text">
                <thead></thead>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Roger Montilla</td>
                  </tr>
                  <tr>
                    <th>Date of Birth</th>
                    <td>December 29, 1988</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>Buenos Aires, Argentina</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col lg={6} md={12}>
              <Table striped bordered hover size="sm" className="text">
                <thead></thead>
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td>rogermontilla01@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>+54 911 58158775</td>
                  </tr>
                  <tr>
                    <th>Telegram</th>
                    <td>@rogermontilla01</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <div className="title" id="Academic">
            Academic Achievements
          </div>
          <hr></hr>
          <ul className="timeline">
            <li>
              <h6 className="d-inline-block">TELECOMMUNICATIONS ENGINEER</h6>
              <a className="float-right">January 2005 to December 2010</a>
              <p>
                Santa Maria University
                <br />
                Barinas, Venezuela
              </p>
            </li>
          </ul>
          <br />
          <div className="title" id="Languages">
            Languages
          </div>
          <hr></hr>
          <div className="subtitle">English</div>
          <ProgressBar now={70} />
          <p className="text paragraph">intermediate reading and writing skills</p>
          <br />
          <div className="title" id="Professional_Experience">
            Professional Experience
          </div>
          <hr></hr>
          <ul className="timeline">
            <li>
              <h6 className="d-inline-block">PAISANOS SA</h6> 
              <a href="#" className="float-right">
                November, 2020 to Present Time
              </a>
              <p>
                Post: Backend Developer <br />
                Descriotion: Backend Applications Development using NodeJS, Express and NestJS.
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">TELECENTRO SA</h6>
              <a href="#" className="float-right">
                November, 2017 to November, 2020
              </a>
              <p>
                Post: Implementation Leader <br />
                Description: Implementation of TLS, VPN, OSPF, EIGRP, BGP protocols. Client support and technical
                management.
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">SISAL S.A.</h6>
              <a href="#" className="float-right">
                April, 2017 to October, 2017
              </a>
              <p>
                Post: level 2 Technician Installation
                <br />
                Description: Maintenance and startup of microwave links, installation of Cisco and Juniper equipment.
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">TELECOMUNICACIONES MOVILNET</h6>
              <a href="#" className="float-right">
                August, 2012 to March, 2017
              </a>
              <p>
                Post: Telecoms Specialist
                <br />
                Descriotion: Operation and maintenance of the access network equipment (GSM, UMTS and LTE technology) at
                the mobile operator Movilnet Venezuela.
              </p>
            </li>
          </ul>
          <br />
          <div className="title" id="Other_Courses">
            Other Courses
          </div>
          <hr></hr>
          <ul className="timeline">
            <li>
              <h6 className="d-inline-block">ENGLISH UPPER INTERMEDIATE B2</h6>
              <a href="#" className="float-right">
                August 2020 to November 2020
              </a>
              <p>
                Intitute Cambridge
                <br />
                Buenos Aires, Argentina
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">ADVANCED WEB DEVELOPER</h6>
              <a href="#" className="float-right">
                August 21st 2020
              </a>
              <p>
                Univeridad Tecnologica Nacional
                <br />
                Buenos Aires, Argentina
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">INICIAL WEB DEVELOPER</h6>
              <a href="#" className="float-right">
                March 13th 2020
              </a>
              <p>
                Univeridad Tecnologica Nacional
                <br />
                Buenos Aires, Argentina
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">CCNA 4: NETWORK CONNECTION</h6>
              <a href="#" className="float-right">
                March 19th 2018
              </a>
              <p>
                Fundacion Proydesa
                <br />
                Buenos Aires, Argentina
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">CERAGON EVOLUTION METRO & EXPAND</h6>
              <a href="#" className="float-right">
                August 29th 2014
              </a>
              <p>
                Ceragon Trainig Center
                <br />
                Caracas, Venezuela
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">OPERATION AND MAINTENANCE OF BTS3900 GSM</h6>
              <a href="#" className="float-right">
                August 8th 2014
              </a>
              <p>
                Huawei Trainig Center
                <br />
                Caracas, Venezuela
              </p>
            </li>
            <li>
              <h6 className="d-inline-block">FIBER OPTIC CONNECTION</h6>
              <a href="#" className="float-right">
                June 2014
              </a>
              <p>
                CANTV Trainig Center
                <br />
                Caracas, Venezuela
              </p>
            </li>
          </ul>
          <br />
          <div className="title" id="Skills">
            Skills
          </div>
          <hr></hr>
          <div className="subtitle">NodeJS / Express</div>
          <ProgressBar now={90} />
          <br />
          <div className="subtitle">MongoDB / Mongoose</div>
          <ProgressBar now={80} />
          <br />
          <div className="subtitle">SQL / MariaDB</div>
          <ProgressBar now={60} />
          <br />
          <div className="subtitle">Angular</div>
          <ProgressBar now={80} />
          <br />
          <div className="subtitle">React</div>
          <ProgressBar now={70} />
          <br />
          <div className="subtitle">Git</div>
          <ProgressBar now={80} />
          <br />
          <div className="subtitle">Linux Intermediate Management</div>
          <ProgressBar now={60} />
          <br />
          <div className="subtitle">Bash</div>
          <ProgressBar now={70} />
          <br />
          <div className="subtitle">Installation of LAN and WLAN Networks</div>
          <ProgressBar now={80} />
          <br />
        </Col>
      </Row>
      <Row>
        <footer className="footer">
          <div className="footer-content">2020 © ROGER MONTILLA</div>
        </footer>
      </Row>
    </Container>
  );
}

export default App;
