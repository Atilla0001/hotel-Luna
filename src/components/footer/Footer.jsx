import { Col, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.scss"

function Footer() {
  return (
    <div style={{background:"#002152", paddingTop:"25px", paddingBottom:"25px"}}>
        <Row>
         
          <Col lg={4}>
         <Row className="amblem">
          <Col lg={4}>
          <NavLink to={"/"} style={{display:"flex", justifyContent:"center"}}> <img src="../../src/assets/images/gh3.png" alt="" style={{ maxHeight: "70px" }} id='logo' />    </NavLink>
          </Col>
          <Col lg={4}>
          <NavLink to={"/"}  style={{display:"flex", justifyContent:"center"}}>  <p   style={{color:"white"}}>Giant Hotel - LUNA </p> </NavLink>
          </Col>
          <Col lg={4}>
          <NavLink to={"/"}  style={{display:"flex", justifyContent:"center"}}>   <img src="../../src/assets/images/stars.png" alt="" style={{ maxHeight: "45px" }} id='stars' /> </NavLink>

          </Col>
          
         </Row>
          </Col>





<Col lg={4}>
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



<Col style={{display:"flex", alignItems:"center"}}  lg={4}>
<FaSquareXTwitter className="footer-social-media"/>
<FaInstagramSquare  className="footer-social-media"/>
<BsLinkedin className="footer-social-media" style={{height:"90px",paddingLeft:"10px"}} />

</Col>







        </Row>

    </div>
  )
}

export default Footer
