import { Footer } from "../../common/Footer/index.js";
import { Nav } from "../../common/Nav/index.js";
import { Intro } from "./Intro/index.js";
import { Header } from "./Header/index.js";
import { Opinions } from "./Opinions/index.js";
import { AboutMe } from "./AboutMe/AboutMe.js";

function HomePage() {
  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <AboutMe />
      <Opinions />
      <Footer />
    </>
  );
}
export default HomePage;
