import Wrapper from "../../components/calendar/Calendar"
import Navbar from "../../components/navbar/Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Home.scss"
import Submarine from "../../components/animations/submarine/Submarine";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <img
        className="d-block w-100 "
        src="../../src/assets/images/w6.jpg"
        alt="Second slide"
        style={{ maxHeight: "700px" }}
      />

      <div id="rzrvsyn">

        <Wrapper></Wrapper>

      </div>


      <Container style={{ marginTop: "70px", marginBottom:"15px" }}>

        <Row>
          <Col>
            <div id="description">
              <h1 id="d1">OUR OPULENCE WITH INCREDIBLE VIEWS</h1>
              <p id="d2">The meeting point of luxury and elegance.
                This magnificent hotel in the heart of the city
                is ready to fascinate you with its unique experiences.
                We are waiting for you to live your unforgettable
                moments in this place, where every detail has been
                meticulously considered and offers every service
                at the highest level of quality.</p>
            </div>
          </Col>
          <Col>

          <h1 id="d3" style={{marginTop:"-30px"}}><Submarine></Submarine></h1>
          
          </Col>
        </Row>
      </Container>






    </>
  )
}

export default Home
