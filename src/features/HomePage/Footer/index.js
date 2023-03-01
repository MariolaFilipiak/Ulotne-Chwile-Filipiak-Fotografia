import { useState } from "react";
import { SocialIcons } from "./SocialIcon";
import {
  Box,
  Form,
  Input,
  Legend,
  Option,
  Text,
  Textarea,
  Type,
  Wrapper,
  Button,
  Info,
} from "./styled";

export const Footer = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    type: "",
    date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues({
      name: "",
      email: "",
      message: "",
      type: "",
      date: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
return(
  <Form onSubmit={handleSubmit}>
  <Wrapper>
    <SocialIcons />
    <Legend>Skontaktuj się</Legend>
    <Box>
      <Text> Imię i Nazwisko:</Text>
      <Input name="name" type="name" required value={formValues.name} onChange={handleInputChange}/>
    </Box>
    <Box>
      <Text> e-mail:</Text>
      <Input
        className="section__formInput"
        name="email"
        type="email"
        required
        value={formValues.email} onChange={handleInputChange}
      />
    </Box>
    <Box>
      <Text>Wybierz rodzaj sesji:</Text>
      <Type type="type" required value={formValues.type} onChange={handleInputChange}>
      <Option>Wymagane</Option>
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
      <Text>*Preferowany termin:<br/>
      </Text>
      <Input name="date" type="date" step="any" required value={formValues.date} onChange={handleInputChange}/>
    </Box>
    <Box>
      <Text> Napisz wiadomość:</Text>
      <Textarea name="description"type="message" required value={formValues.message} onChange={(event) => setFormValues(event.target.value)}></Textarea>
    </Box>
    <Button type="submit" >
      Wyślij
    </Button>
    <Info>*Wysłanie formularza nie gwarantuje rezerwaćji sesji w wybranym terminie , jest to opcjonalny termin do potwierdzenia przez fotografa</Info>
  </Wrapper>
</Form>
)
 
};
