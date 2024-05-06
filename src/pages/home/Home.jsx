import Wrapper from "../../components/calendar/Calendar"
import Navbar from "../../components/navbar/Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Submarine from "../../components/animations/submarine/Submarine";
import Room from "../../../src/components/roomSlider/Room";
import "./Home.scss"

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
                at the highest level of quality...</p>
            </div>
          </Col>
          <Col>

          <h1 id="d3" style={{marginTop:"-30px"}}><Submarine></Submarine></h1>
          
          </Col>
        </Row>
      </Container>





<Room></Room>







<div className="container-fluid" 
style={{ display:"flex",flexDirection:"column",background:"#BED3EA ", borderRadius:"50px",alignItems:"center"}}>
<h1 style={{color:"#000 ", fontWeight:"600"}} id="titleDrinks">DINING & DRINKS & NIGHT</h1>
<Row style={{display:"flex", alignItems:"center"}}>
  <Col>
  <img src="src/assets/images/bar.jpg"  alt="" style={{height:"auto", width:"80%"}}/>
  </Col>
  <Col>
  <img src="src/assets/images/dining.jpg"  alt=""  style={{height:"auto", width:"80%"}}/>
  </Col>
  <Col>
  <img src="src/assets/images/night.jpg"  alt=""  style={{height:"auto", width:"80%"}}/>
  </Col>
</Row>
=======
<div className="container-fluid" style={{ display:"flex",justifyContent:"center",background:"#0069DB", borderRadius:"50px",opacity:"0.2"}}>
<h1 >DINING & DRINKS</h1>

</div>

    </>
  )
}

export default Home
