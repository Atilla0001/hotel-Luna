import Button from 'react-bootstrap/Button';
import { BsTelephone } from "react-icons/bs";
import { useLocation, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';
import {motion }    from 'framer-motion'
import "./Navbar.scss"

const Navbar = () => {

  const location = useLocation()
  const [page, setPage] = useState("")

  useEffect(
    () => {
      setPage(location.pathname)
    }, [location])

  const [toggle, setToggle] = useState(false)
  const clickNav = () => {
    setToggle(!toggle)
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }



  return (
    <>
      <div className="container-fluid " id='navbar' style={{ padding: "0" }}>


        <div className="container-fluid" id='topnav'>
          <div style={{ display: "flex", justifyContent: "center" }} id=''>
            <BsTelephone style={{ marginTop: "4px", color: "#fff" }} />
            <p style={{ paddingLeft: "5px", whiteSpace: "nowrap", color: "#fff" }} id="textnav" >0333 333 33 33 |</p>
            <p style={{ color: "white", whiteSpace: "pre" }}  id="textnav"> info@gianthotel.com</p>
          </div>
          <div style={{ display: "flex" }} id='xyz'>
            <p style={{ color: "white" }}>Login</p>
            <p style={{ color: "white", paddingLeft: "10px" }}>Tr.</p>
            <p style={{ color: "white", paddingLeft: "10px" }}>Fr.</p>
          </div>

        </div>
        <div className="container-fluid" id='topnav2' >
          <div><p></p></div>
        <div style={{ display: "flex" }}>
            <p style={{ color: "white" }}>Login</p>
            <p style={{ color: "white", paddingLeft: "10px" }}>Tr.</p>
            <p style={{ color: "white", paddingLeft: "10px" }}>Fr.</p>
          </div>
        </div>



        <div className="navbar2" >


          <div id='logos'>
            <NavLink to={"/"}>       <img src="../../src/assets/images/gh3.png" alt="" style={{ maxHeight: "70px" }} id='logo' />    </NavLink>
            <div id='names'>
            <NavLink to={"/"}>  <p id='name'  >Giant Hotel - LUNA </p> </NavLink>
              <div style={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={"/"}>   <img src="../../src/assets/images/stars.png" alt="" style={{ maxHeight: "45px" }} id='stars' /> </NavLink>
              </div>
            </div>
          </div>




          <div id='buttonsCenter'>
            <Button variant="outline-secondary" id="Navbtn" href='/hakkimizda' style={{ color: page == "/hakkimizda" ? "#8f9ff3" : "" }} >About Us</Button>
            <Button variant="outline-secondary" id="Navbtn" href='/konaklama' style={{ color: page == "/konaklama" ? "#8f9ff3" : "" }}>Accommodation</Button>
            <Button variant="outline-secondary" id="Navbtn" href='/yemeicme' style={{ color: page == "/yemeicme" ? "#8f9ff3" : "", whiteSpace: "nowrap" }}>Restaurant</Button>
            <Button variant="outline-secondary" id="Navbtn" href='/spahavuz' style={{ color: page == "/spahavuz" ? "#8f9ff3" : "", whiteSpace: "nowrap" }}>Spa & Pool</Button>
            <Button variant="outline-secondary" id="Navbtn" href='/toplanti' style={{ color: page == "/toplanti" ? "#8f9ff3" : "" }}>Meeting</Button>
            <Button variant="outline-secondary" id="Navbtn" href='/galeri' style={{ color: page == "/galeri" ? "#8f9ff3" : "" }}>Galeri</Button>
            <Button variant="outline-secondary" id="Navbtn" href='/iletisim' style={{ color: page == "/iletisim" ? "#8f9ff3" : "" }}>Contact</Button>
          </div>




          <div >
            <div style={{ display: "flex", justifyContent: "center ", alignItems: "center " }} id='doublebtn'>
        
<<<<<<< HEAD
              <Button variant="secondary" style={{ backgroundColor: "#00539C", maxHeight: "50px" }} id="Navbtn2">Rezervation</Button>
=======
              <Button variant="secondary" style={{ backgroundColor: "#052C55", maxHeight: "50px" }} id="Navbtn2">Rezervation</Button>
>>>>>>> 3ad386536a57a928a03cde4978fc66e601441175
            </div>

          </div>


          <GiHamburgerMenu id='hamburger' onClick={clickNav} />

        </div>




  


        <motion.div className="container-fluid navbar3" style={{ display: toggle === true ? "block" : "none",marginTop:"0" }}   >
       
          <motion.nav
      animate={toggle ? "open" : "closed"}
      variants={variants}
    >
  
  <ul id="ulnav">
            <li style={{ listStyleType: "none" }} > <Button variant="outline-secondary" id="Navbtn2" href='/hakkimizda' style={{ color: page == "/hakkimizda" ? "#8f9ff3" : "" }} >About Us</Button></li>
            <li style={{ listStyleType: "none" }}>
              <Button variant="outline-secondary" id="Navbtn2" href='/konaklama' style={{ color: page == "/konaklama" ? "#8f9ff3" : "" }}>Accommodation</Button>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Button variant="outline-secondary" id="Navbtn2" href='/yemeicme' style={{ color: page == "/yemeicme" ? "#8f9ff3" : "", whiteSpace: "nowrap" }}>Restaurant</Button>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Button variant="outline-secondary" id="Navbtn2" href='/spahavuz' style={{ color: page == "/spahavuz" ? "#8f9ff3" : "", whiteSpace: "nowrap" }}>Spa & Pool</Button>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Button variant="outline-secondary" id="Navbtn2" href='/toplanti' style={{ color: page == "/toplanti" ? "#8f9ff3" : "" }}>Meeting</Button>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Button variant="outline-secondary" id="Navbtn2" href='/galeri' style={{ color: page == "/galeri" ? "#8f9ff3" : "" }}>Galeri</Button>
            </li>
            <li style={{ listStyleType: "none" }}>
              <Button variant="outline-secondary" id="Navbtn2" href='/iletisim' style={{ color: page == "/iletisim" ? "#8f9ff3" : "" }}>Contact</Button>
            </li>
            <li style={{ listStyleType: "none" }}>
<<<<<<< HEAD
              <Button variant="secondary" style={{ backgroundColor: "#00539C", maxHeight: "50px" }} id="">Reservation</Button>
=======
              <Button variant="secondary" style={{ backgroundColor: "#052C55", maxHeight: "50px" }} id="">Reservation</Button>
>>>>>>> 3ad386536a57a928a03cde4978fc66e601441175
            </li>
            <li style={{ listStyleType: "none" }}>
              <p> Language Extention</p>
            </li>
          </ul>





    </motion.nav>
        </motion.div>
      </div>
    </>
  )
}

export default Navbar
