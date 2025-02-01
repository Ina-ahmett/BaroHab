import Header from "./components/header"
import Bandhig from "./pages/bandhig"
import Footer from "./pages/footer"
import ImageHeader from "./pages/imageHeader"

const App = ()=>{
  return(
    <div>
      <Header/>
      <ImageHeader/>
      <Bandhig/>
      <Footer/>
    </div>
  )
}
export default App