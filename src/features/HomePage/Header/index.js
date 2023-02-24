import { Autor, StyledLogo, Text, Wrapper } from "./styled";
import { ReactComponent as Logo } from "../../../common/Images/logo.svg";
export const Header = () => (
  <>
    <Wrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <Autor>David duChemin</Autor>
      <Text>
        Patrz oczyma,
        <br />
        fotografuj <br />
        sercem
      </Text>
    </Wrapper>
  </>
);
