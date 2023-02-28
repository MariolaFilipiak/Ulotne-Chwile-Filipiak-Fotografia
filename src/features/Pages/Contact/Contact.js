import { SocialIcons } from "../../HomePage/Footer/SocialIcon";
import {
  Box,
  Container,
  Input,
  Legend,
  Option,
  Text,
  Textarea,
  Type,
  Wrapper,
  Button,
  Header,
  Info,
} from "./styled";

export default () => (
  <Container>
    <Header />
    <Wrapper>
      <SocialIcons />
      <Legend>Skontaktuj się</Legend>
      <Box>
        <Text> Imię i Nazwisko:</Text>
        <Input name="name" type="text" required />
      </Box>
      <Box>
        <Text> e-mail:</Text>
        <Input
          className="section__formInput"
          name="email"
          type="email"
          required
        />
      </Box>
      <Box>
        <Text>Wybierz rodzaj sesji:</Text>
        <Type>
          <Option>Sesja rodzinna</Option>
          <Option>Sesja ciążowa</Option>
          <Option>Sesja dziecięca</Option>
          <Option>Sesja indywidualna</Option>
          <Option>Sesja niemowlęca</Option>
          <Option>Sesja par</Option>
          <Option>Reportaż</Option>
        </Type>
      </Box>
      <Box>
        <Text> Wybierz datę:</Text>
        <Input name="date" type="date" step="any" />
      </Box>
      <Box>
        <Text> Napisz wiadomość:</Text>
        <Textarea name="description"></Textarea>
      </Box>
      <Button type="submit" value="Wyślij">
        Wyślij
      </Button>
    </Wrapper>
  </Container>
);
