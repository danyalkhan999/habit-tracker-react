import Header from "./components/Header";
import Overview from "./components/Overview";
import HabitDisplay from "./components/HabitDisplay";

import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";

import Typed from "typed.js";

function App() {
  // code for typed.js library
  useEffect(() => {
    const typed = new Typed(".tag", {
      strings: [
        "...okay. Let’s start by tracking one good habit for the next 7 days.",
        "Small daily actions lead to big life changes—let's begin today!",
        "Focus on one habit and show up daily—it’s all about consistency.",
        "Change starts now. One habit, one week, one step closer to your goal.",
        "Just 1% better every day—commit for the next 7 days!",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col md={3}>
            {/* Overview component */}
            <Overview />
          </Col>
          <Col md={9}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
        </Row>
        <h4 className="text-light d-flex  mt-5  justify-content-center">
          <span className="tag"></span>
        </h4>
      </Container>
    </>
  );
}

export default App;
