import {
  Element,
  List,
  StyledLogo,
  StyledLogo2,
  StyledNavLink,
  Wrapper,
} from "./styled";
import { ReactComponent as Logo } from "../../common/Images/logo.svg";

export const RightNav = ({ open }) => {
  return (
    <Wrapper>
      <StyledLogo2>
        <Logo />
      </StyledLogo2>
      <List open={open}>
        <Element>
          <StyledNavLink to="/">Strona Główna</StyledNavLink>
        </Element>
        <Element>
          <StyledNavLink to="oferta">Oferta</StyledNavLink>
        </Element>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <Element>
          <StyledNavLink to="galeria">Galeria</StyledNavLink>
        </Element>
        <Element>
          <StyledNavLink to="kontakt">Kontakt</StyledNavLink>
        </Element>
      </List>
    </Wrapper>
  );
};
