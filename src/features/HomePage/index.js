import { Nav } from "../Nav";
import { Header } from "./Header";
import { Content } from "./Content";
import { Opinions } from "./Opinions";
import { Footer } from "./Footer";

function HomePage() {
  return (
    <>
      <Nav />
      <Header />
      <Content />
      <Opinions />
      <Footer />
    </>
  );
}
export default HomePage;
