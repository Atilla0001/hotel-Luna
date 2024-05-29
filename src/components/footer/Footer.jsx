import { Col, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.scss"

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
  <li className="footer-link">About Us</li>
  <li className="footer-link">Accomodation</li>
  <li className="footer-link">Restaurant</li>
  <li className="footer-link">Spa & Pool</li>
  <li className="footer-link">Meeting</li>
  <li className="footer-link">Galeri</li>
  <li className="footer-link">Contact</li>
</ul>
</Col>



<div>
<FaSquareXTwitter className="footer-social-media"/>
<FaInstagramSquare  className="footer-social-media"/>
<BsLinkedin className="footer-social-media" />

</div>







        </Row>

    </div>
  )
}

export default Footer
