import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Image1 from "../assets/images/projects/GWscreenshot.PNG"
import Image2 from "../assets/images/projects/BILscreenshot.PNG"
import Image3 from "../assets/images/projects/CQscreenshot.PNG"
import Image4 from "../assets/images/projects/EDBscreenshot.PNG"
import Image5 from "../assets/images/projects/WDSscreenshot.PNG"
import Image6 from "../assets/images/projects/BWCCscreenshot.JPG"

function Portfolio () {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md=12">
                        <h2>Portfolio</h2>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col size="md-6">
                        <h4>Suds Time</h4>
                        <p>Link to the page: <a href="https://powerful-castle-14067.herokuapp.com/logout">https://powerful-castle-14067.herokuapp.com/</a></p>
                        <p>Link to the Github repository: <a href="https://github.com/flynn0087/BWCC_Teetime">https://github.com/flynn0087/BWCC_Teetime</a></p>
                        <img src={ Image6 } alt="Tee-Time Scheduler Screenshot" style={{ margin: 10, maxWidth: 350, maxHeight: 350 }}/>
                    </Col>

                    <Col size="md-6">
                        <h4>BookIt-List</h4>
                        <p>Link to the page: <a href="https://bookit-list.herokuapp.com/login">https://bookit-list.herokuapp.com/login</a></p>
                        <p>Link to the Github repository: <a href="https://github.com/flynn0087/BookItList">https://github.com/flynn0087/BookItList</a></p>
                        <img src={ Image2 } alt="BookIt-List Screenshot" style={{ margin: 10, maxWidth: 350, maxHeight: 350 }}/>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-6">  
                        <h4>Giphy Weather</h4>
                        <p>Link to the page: <a href="https://flynn0087.github.io/Giphy-Weather_Forked/">https://flynn0087.github.io/Giphy-Weather_Forked/</a></p>
                        <p>Link to the Github repository: <a href="https://github.com/flynn0087/Giphy-Weather_Forked">https://github.com/flynn0087/Giphy-Weather_Forked</a></p>
                        <img src={ Image1 } alt="Giphy Weather Screenshot" style={{ margin: 10, maxWidth: 350, maxHeight: 350 }}/>
                    </Col>

                    <Col size="md-6">
                        <h4>Eat-Da-Burger</h4>
                        <p>Link to the page: <a href="https://safe-brook-38698.herokuapp.com/">https://safe-brook-38698.herokuapp.com/</a></p>
                        <p>Link to the Github repository: <a href="https://github.com/flynn0087/Burger">https://github.com/flynn0087/Burger</a></p>
                        <img src={ Image4 } alt="Eat-Da-Burger Screenshot" style={{ margin: 10, maxWidth: 350, maxHeight: 350 }}/>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-6">
                        <h4>Work Day Scheduler</h4>
                        <p>Link to the page: <a href="https://flynn0087.github.io/Work_Day_Scheduler/">https://flynn0087.github.io/Work_Day_Scheduler/</a></p>
                        <p>Link to the Github repository: <a href="https://github.com/flynn0087/Work_Day_Scheduler">https://github.com/flynn0087/Work_Day_Scheduler</a></p>
                        <img src={ Image5 } alt="Work Day Planner Screenshot" style={{ margin: 10, maxWidth: 350, maxHeight: 350 }}/>
                    </Col>

                    <Col size="md-6">
                        <h4>Intro Coding Quiz</h4>
                        <p>Link to the page: <a href="https://flynn0087.github.io/Intro_Coding_Quiz/">https://flynn0087.github.io/Intro_Coding_Quiz/</a></p>
                        <p>Link to the Github repository: <a href="https://github.com/flynn0087/Intro_Coding_Quiz">https://github.com/flynn0087/Intro_Coding_Quiz</a></p>
                        <img src={ Image3 } alt="Coding Quiz Screenshot" style={{ margin: 10, maxWidth: 350, maxHeight: 350 }}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Portfolio;