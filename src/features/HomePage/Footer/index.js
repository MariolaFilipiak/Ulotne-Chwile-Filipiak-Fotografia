
import { SocialIcons } from "./SocialIcon";
import { Box, Button, Contact,Wrapper } from "./styled";

export const Footer = () => (
  <Wrapper>
    <Box>
      <SocialIcons />
    </Box>
    <Box>
      <Contact href="mailto:mfilipiak61@gmail.com">
        Mfilipiak61@gmail.com
      </Contact>
      <Contact href="tel:697075389">tel: 697075389</Contact>
      <Button>Kontakt</Button>
    </Box>
  </Wrapper>
);
