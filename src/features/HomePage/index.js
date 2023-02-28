import { Nav } from "../Nav/index.js";
import { Header } from "./Header";
import { ContentPage } from "./Content";
import { Opinions } from "./Opinions";
import { Footer } from "./Footer";
import { AboutMe } from "./AboutMe";

function HomePage() {
  return (
    <>
      <Nav />
      <Header />
      <AboutMe />
      <ContentPage />
      <Opinions />
      <Footer />
    </>
  );
}
export default HomePage;
