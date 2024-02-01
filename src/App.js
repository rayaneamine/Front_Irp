import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/pageHome/home';
import HeaderFooter from "./components/header/header.footer";
import Model from "./pages/pageModel/model";
import Marque from "./pages/pageMarque/marque";
import Techniciens from "./pages/pageTechniciens/techniciens";


function App(){
    return(
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Home />}/>
            <Route path="/marque" element={<Marque/>}/>
            <Route path="/model" element={<Model />} />
            <Route path="/techniciens" element={<Techniciens />} />
          </Route>  
        </Routes>
      </BrowserRouter>
    
    );
}

export default App;