import { Col, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div style={{background:"#002152", paddingTop:"25px"}}>
        <Row>
         
          <Col>
          <div id='logos'>
            <NavLink to={"/"}>       <img src="../../src/assets/images/gh3.png" alt="" style={{ maxHeight: "70px" }} id='logo' />    </NavLink>
            <div id='names'>
            <NavLink to={"/"}>  <p id='name'  >Giant Hotel - LUNA </p> </NavLink>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={"/"}>   <img src="../../src/assets/images/stars.png" alt="" style={{ maxHeight: "45px" }} id='stars' /> </NavLink>
              </div>
            </div>
          </div>
          </Col>





<Col>
<ul   style={{listStyle:"none"}}>
  <li>About Us</li>
  <li>Accomodation</li>
  <li>Restaurant</li>
  <li>Spa & Pool</li>
  <li>Meeting</li>
  <li>Galeri</li>
  <li>Contact</li>
</ul>
</Col>



<div>
<FaSquareXTwitter />
<FaInstagramSquare />
<BsLinkedin />

</div>







        </Row>

    </div>
  )
}

export default Footer
