import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Hakkimizda from "./pages/hakkimizda/Hakkimizda"
import Konaklama from "./pages/konaklama/Konaklama"
import Yemeicme from "./pages/yemeicme/Yemeicme"
import Spahavuz from "./pages/spahavuz/Spahavuz"
import Toplanti from "./pages/toplanti/Toplanti"
import Galeri from "./pages/galeri/Galeri"
import İletisim from "./pages/iletisim/İletisim"
import StandartRoom from "./pages/rooms/StandartRoom"
import Cultural from "./pages/rooms/Cultural"
import BigDeluxe from "./pages/rooms/BigDeluxe"
import FamilySuite from "./pages/rooms/FamilySuite"
import KingDeluxe from "./pages/rooms/KingDeluxe"
import KingExecutive from "./pages/rooms/KingExecutive"
import Minimalist from "./pages/rooms/Minimalist"
import TwinDeluxe from "./pages/rooms/TwinDeluxe"
import TwoBedroom from "./pages/rooms/TwoBedroom"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home></Home>}/>
      <Route path="/hakkimizda" element={<Hakkimizda></Hakkimizda>}/>
      <Route path="/konaklama" element={<Konaklama></Konaklama>}/>
      <Route path="/yemeicme" element={<Yemeicme></Yemeicme>}/>
      <Route path="/spahavuz" element={<Spahavuz></Spahavuz>}/>
      <Route path="/toplanti" element={<Toplanti></Toplanti>}/>
      <Route path="/galeri" element={<Galeri></Galeri>}/>
      <Route path="/iletisim" element={<İletisim></İletisim>}/>
      <Route path="/standart" element={<StandartRoom/>}/>
      <Route path="/cultural" element={<Cultural/>}/>
      <Route path="/bigdeluxe" element={<BigDeluxe/>}/>
      <Route path="/familysuite" element={<FamilySuite/>}/>
      <Route path="/kingdeluxe" element={<KingDeluxe/>}/>
      <Route path="/kingexecutive" element={<KingExecutive/>}/>
      <Route path="/minimalist" element={<Minimalist/>}/>
      <Route path="/twindeluxe" element={<TwinDeluxe/>}/>
      <Route path="/twobedroom" element={<TwoBedroom/>}/>



      <Route path="/" element={<Home/>}/> 
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
