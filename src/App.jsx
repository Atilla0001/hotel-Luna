import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Hakkimizda from "./pages/hakkimizda/Hakkimizda"
import Konaklama from "./pages/konaklama/Konaklama"
import Yemeicme from "./pages/yemeicme/Yemeicme"
import Spahavuz from "./pages/spahavuz/Spahavuz"
import Toplanti from "./pages/toplanti/Toplanti"
import Galeri from "./pages/galeri/Galeri"
import İletisim from "./pages/iletisim/İletisim"


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



      <Route path="/" element={<Home/>}/> 
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
