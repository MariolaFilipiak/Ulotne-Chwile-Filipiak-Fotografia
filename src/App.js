import { Route, Routes,HashRouter } from "react-router-dom";
import { Nav } from "./features/Nav";

import HomePage from "./features/HomePage";
import Portfolio from "./features/Pages/Portfolio/Portfolio";
import Prices from "./features/Pages/Prices/Prices";
import Contact from "./features/Pages/Contact/Contact";

export const App = () => (
<HashRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path ="portfolio"element={<Portfolio/>}/>
    <Route path ="prices" element={<Prices/>}/>
    <Route path ="contact" element={<Contact/>}/>
   </Routes>
   </HashRouter>    
);