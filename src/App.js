import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/pageHome/home';
import HeaderFooter from "./components/header/header.footer";



function App(){
    return(
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Home />}/>
          </Route>  
        </Routes>
      </BrowserRouter>
    
    );
}

export default App;