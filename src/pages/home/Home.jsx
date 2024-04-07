import Wrapper from "../../components/calendar/Calendar"
import Navbar from "../../components/navbar/Navbar"

import "./Home.scss"
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
     
      <img
          className="d-block w-100 mt-2"
          src="../../src/assets/images/w6.jpg"
          alt="Second slide"
          style={{maxHeight:"700px"}}
        />

<div id="rzrvsyn">
<div style={{backgroundColor:"white", height:"10rem" , width:"40rem", borderRadius:"20px"}}>

<Wrapper></Wrapper>
</div>

</div>


<div style={{height:"150px", backgroundColor:"white"}}></div>
  

    </div>
  )
}

export default Home
