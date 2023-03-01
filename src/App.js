import { Route, Routes, HashRouter } from "react-router-dom";

import HomePage from "./features/HomePage";
import { Portfolio } from "./features/Pages/Portfolio/Portfolio";
import { Prices } from "./features/Pages/Prices/Prices";
import Contact from "./features/Pages/Contact/Contact";
import { Nav } from "./features/Nav/index.js";
import Family from "./features/Pages/Portfolio/Family";
import Kids from "./features/Pages/Portfolio/Kids";
import Pregnat from "./features/Pages/Portfolio/Pregnat";
import Partners from "./features/Pages/Portfolio/Partners";
import Individual from "./features/Pages/Portfolio/Individual";
import Reports from "./features/Pages/Portfolio/Reports";
import { ScrollToTop } from "./common/ScrollToTop";

export const App = () => (
    
  <HashRouter>
    <Nav />
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="prices" element={<Prices />} />
      <Route path="contact" element={<Contact />} />
      <Route path="rodzinne" element={<Family />} />
      <Route path="dziecięce" element={<Kids />} />
      <Route path="ciążowe" element={<Pregnat />} />
      <Route path="pary" element={<Partners />} />
      <Route path="indywidualne" element={<Individual />} />
      <Route path="reportaże" element={<Reports />} />
    </Routes>
  </HashRouter>
);
