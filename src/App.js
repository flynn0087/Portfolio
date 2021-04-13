import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import myPortfolio from "./pages/Portfolio";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/myportfolio" component={myPortfolio} />
      </Container>
    </Router>
  );
}

export default App;
