import {
  Button,
  Paragraph,
  Title,
  Wrapper,
  Container,
  Content,
  Price,
} from "./styled";

export const Prices = () => (
  <Container>
    <Wrapper>
      <Content>
        <Title>Pakiet mini</Title>
        <Price>350zł</Price>
        <Paragraph>
          10 zdjęć w wersji cyfrowej
          <br />
          dodatkowe ujęcia 35zł/szt
        </Paragraph>
        <Button to="/kontakt">Zarezererwuj</Button>
      </Content>
      <Content>
        <Title>Pakiet midi</Title>
        <Price>450zł</Price>
        <Paragraph>
          15 zdjęć w wersji cyfrowej
          <br />
          15 wydruków 15x21
          <br />
          dodatkowe ujęcia 35zł/szt
        </Paragraph>
        <Button to="/kontakt">Zarezererwuj</Button>
      </Content>
      <Content>
        <Title>Pakiet maxi</Title>
        <Price>550zł</Price>
        <Paragraph>
          20 zdjęć w wersji cyfrowej
          <br />
          20 wydruków 15x21
          <br />
          dodatkowe ujęcia 35zł/szt
        </Paragraph>
        <Button to="/kontakt">Zarezererwuj</Button>
      </Content>
    </Wrapper>
  </Container>
);
