import { Route, Routes, HashRouter } from "react-router-dom";
import HomePage from "./features/HomePage/HomePage";
import Contact from "./features/Pages/Contact/Contact";
import { ScrollToTop } from "./common/ScrollToTop";
import { Gallery } from "./features/Pages/Gallery/Gallery";
import { Nav } from "./common/Nav";
import { Family } from "./features/Pages/Offers/Family";
import Kids from "./features/Pages/Offers/Kids";
import Pregnat from "./features/Pages/Offers/Pregnat";
import Partners from "./features/Pages/Offers/Partners";
import Individual from "./features/Pages/Offers/Individual";
import Reports from "./features/Pages/Offers/Reports";
import { Offers } from "./features/Pages/Offers/Offers";

export const App = () => (
  <HashRouter>
    <Nav />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="oferta" element={<Offers />} />
      <Route path="galeria" element={<Gallery />} />
      <Route path="kontakt" element={<Contact />} />
      <Route path="oferta/rodzinne" element={<Family />} />
      <Route path="oferta/dziecięce" element={<Kids />} />
      <Route path="oferta/ciążowe" element={<Pregnat />} />
      <Route path="oferta/pary" element={<Partners />} />
      <Route path="oferta/indywidualne" element={<Individual />} />
      <Route path="oferta/reportaże" element={<Reports />} />
    </Routes>
  </HashRouter>
);
