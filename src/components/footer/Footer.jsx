import { Col, Row } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.scss"

function Footer() {
  return (
    <div style={{background:"#002152", paddingTop:"25px", paddingBottom:"25px",marginTop:"100px"}}>
        <Row className="row-parent">
         
          <Col lg={4} >
         <Row className="amblem">
          <Col lg={4} className="amblem-col">
          <NavLink to={"/"} style={{display:"flex", justifyContent:"center"}}> <img src="../../src/assets/images/gh3.png" alt="" style={{ maxHeight: "70px" }} id='logo' />    </NavLink>
          </Col>
          <Col lg={4}  className="amblem-col">
          <NavLink to={"/"}  style={{display:"flex", justifyContent:"center"}}>  <p   style={{color:"white"}}>Giant Hotel - LUNA </p> </NavLink>
          </Col>
          <Col lg={4} className="stars-column amblem-col">
          <NavLink to={"/"}  style={{display:"flex", justifyContent:"center"}}>   <img src="../../src/assets/images/stars.png" alt="" style={{ maxHeight: "45px" }} id='stars' /> </NavLink>

          </Col>
          
         </Row>
          </Col>





<Col lg={4} className="cols">
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



<Col style={{display:"flex", alignItems:"center"}}  lg={4}  className="cols">
<FaSquareXTwitter  className="footer-social-media"/>
 <Link to="https://www.instagram.com/atillatls/" target="_blank">  <FaInstagramSquare  className="footer-social-media"/></Link>
<Link to={"https://www.linkedin.com/in/atilla-arslan-3b32861b4/"}  target="_blank" ><BsLinkedin className="footer-social-media footer-social-media-linkedin"  />
 </Link>

</Col>







        </Row>

    </div>
  )
}

export default Footer
