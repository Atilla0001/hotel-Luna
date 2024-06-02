import Wrapper from "../../components/calendar/Calendar"
import Navbar from "../../components/navbar/Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Submarine from "../../components/animations/submarine/Submarine";
import Room from "../../../src/components/roomSlider/Room";
import "./Home.scss"
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
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







 <div className="container-fluid" style={{ display:"flex",flexDirection:"column",background:"#BED3EA ", borderRadius:"50px",alignItems:"center" ,height:"400px",justifyContent:"center"}}>

<h1 style={{color:"#000 ", fontWeight:"600"}} id="titleDrinks" >  DINING & DRINKS & NIGHT</h1>

<Row style={{display:"flex", alignItems:"center",paddingTop:"15px",paddingLeft:"25px"}}>
  <Col  style={{ display: "flex", justifyContent: "center" }}>
 <Link><img src="src/assets/images/dining.jpg"  alt="" style={{height:"auto", width:"80%" }}/></Link> 
  </Col>
  <Col style={{ display: "flex", justifyContent: "center" }}>
 <Link><img src="src/assets/images/bar.jpg"  alt=""  style={{ width:"80%", maxHeight:"330px"}}/></Link> 
  </Col>
  <Col style={{ display: "flex", justifyContent: "center" }}>
 <Link><img src="src/assets/images/night.jpg"  alt=""  style={{height:"auto", width:"80%"}}/></Link> 
  </Col>
</Row>



</div> 
  
<div>
  <p style={{padding:"20px 90px", fontSize:"18px",fontWeight:"600"}}>
  Welcome to our five-star seaside hotel, where luxury meets tranquility. Nestled along the pristine shores of the Mediterranean, our hotel offers a haven of relaxation and indulgence for every guest.

<br /> Our accommodation options cater to every preference and budget. Whether you seek a cozy room for a weekend getaway, a spacious suite for a family vacation, or a lavish penthouse for a special occasion, we have it all. Each room is meticulously designed to provide comfort and style, ensuring a memorable stay for our guests.

<br /> Indulge in a culinary journey at our exquisite restaurants, where world-class chefs create delectable dishes using the freshest local ingredients. From gourmet seafood to authentic Mediterranean cuisine, our diverse dining options promise to tantalize your taste buds.

<br /> Unwind and rejuvenate at our state-of-the-art spa, where expert therapists offer a range of treatments designed to relax the body and soothe the mind. Take a dip in our infinity pool overlooking the azure waters of the Mediterranean, or stroll along the sandy beach and feel the gentle breeze against your skin.

For those seeking adventure, our hotel offers a variety of activities both on land and at sea. Explore the picturesque coastline with a guided kayak tour, or embark on a thrilling scuba diving expedition to discover the vibrant marine life beneath the waves.
<br /> At our five-star seaside hotel, every moment is crafted to perfection, ensuring an unforgettable experience for our guests. Whether you are seeking relaxation, adventure, or simply a moment of bliss by the sea, we invite you to discover the magic of our hotel and create memories that will last a lifetime.
  </p>
</div>



  <Footer></Footer>
    </React.Fragment>
  )
}

export default Home
