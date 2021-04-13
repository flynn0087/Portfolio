import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Resume from "../assets/resume 2_4_21.pdf"
import ImageMe from "../assets/images/photo/P_20201007_091328.jpg"
import "./style.css";
import ImageMtn from "../assets/images/photo/mtn.jpg"

function About() {
  return (
    <div style={{ backgroundImage: `url(${ImageMtn})`, backgroundSize: `contain` }} alt="Background of mountain">
      <Container>
        <Row>
          <Col size="xl-12">
            <h2>About Me</h2>
          </Col>
          <Col size="xl-3">
            <img src={ ImageMe } alt="Ben Flynn" style={{ maxWidth: 350, maxHeight: 350 }}/>
          </Col>
          <Col size="xl-9">
            <p>
              My name is Benjamin (Ben) Flynn. I was born on December 14, 1983 in Minneapolis, MN. I still currently live in Minneapolis, MN.
              However, I have also lived in Chicago, IL; Steamboat Springs, CO; and Telluride, CO. I lived in Chicago for two years after 
              graduating from the University of Minnesota. I lived in Colorado for a total of four winters, with one summer as well. Chicago
              was a lot of fun as it is a large city and I got to work downtown. It also had really good cheap food. I really enjoyed living 
              in Colorado as I am an avid downhill skier and snowboarder. During the summer I also enjoyed hiking. Mountains are the best! I 
              still enjoy traveling to the mountains to ski when I can.
            </p>
            <p>
              I graduated from the University of Minnesota with degrees in Economics and History. I have worked mainly in business office 
              postions. Though, I have worked a variety of roles, most had something to do with processing transactions in a CRM type software.
              I have also done quality control, editing and some publishing to a web page. I am learning to code and develop web pages to 
              hopefully expand my career opporunities. I also really enjoy using computers and play video games in my spare time. It would be
              interesting to get a chance to work on game creation; however, I have an open mind about positions as I am new to coding.
            </p>
          </Col>
        </Row>

        <Row>
          <Col size="xl-3">
            <h3>Contact Info</h3>
            <ul>
              <li>Phone: 612-306-9735</li>
              <li><a href="mailto:flynn0087@gmail.com">Send Email</a></li>
              <li><a href={ Resume }>Resume</a></li>
              <li><a href="https://github.com/flynn0087" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/benjamin-flynn-83953942/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;