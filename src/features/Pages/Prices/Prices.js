import {
  Button,
  Paragraph,
  Title,
  Wrapper,
  Container,
  Content,
  Header,
  Price,
} from "./styled";
import { Footer } from "../../HomePage/Footer";
import Contact from "../Contact/Contact";

export const Prices = () => (
  <Container>
    <Header />
    <Wrapper>
      <Content>
        <Title>Pakiet mini</Title>
        <Price>350zł</Price>
        <Paragraph>
          10 zdjęć w wersji cyfrowej
          <br />
          czas sesji: do 45 minut
          <br />
          dodatkowe ujęcia 35zł/szt
        </Paragraph>
        <Button to="/contact">Zarezererwuj</Button>
      </Content>
      <Content>
        <Title>Pakiet midi</Title>
        <Price>450zł</Price>
        <Paragraph>
          15 zdjęć w wersji cyfrowej
          <br />
          15 wydruków 15x21
          <br />
          czas sesji: do 60 minut
          <br />
          dodatkowe ujęcia 35zł/szt
        </Paragraph>
        <Button>Zarezererwuj</Button>
      </Content>
      <Content>
        <Title>Pakiet maxi</Title>
        <Price>550zł</Price>
        <Paragraph>
          20 zdjęć w wersji cyfrowej
          <br />
          20 wydruków 15x21
          <br />
          czas sesji: do 90 minut
          <br />
          dodatkowe ujęcia 35zł/szt
        </Paragraph>
        <Button>Zarezererwuj</Button>
      </Content>
    </Wrapper>
    <Footer />
  </Container>
);
