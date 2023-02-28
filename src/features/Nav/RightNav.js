import { Element, List, StyledLogo, StyledLogo2, StyledNavLink, Wrapper} from "./styled";
import { ReactComponent as Logo } from "../../common/Images/logo.svg";

export const RightNav = ({ open }) => {
  return (
    <Wrapper>
      <StyledLogo2>
        <Logo/>
      </StyledLogo2>
      <List open={open}>
        <Element>
          <StyledNavLink to="/">Strona Główna</StyledNavLink>
        </Element>
        <Element>
          <StyledNavLink to="prices">Oferta</StyledNavLink>
        </Element>
        <StyledLogo>
        <Logo/>
        </StyledLogo>
        <Element>
          <StyledNavLink to="portfolio">Portfolio</StyledNavLink>
        </Element>
        <Element>
          <StyledNavLink to="contact">Kontakt</StyledNavLink>
        </Element>
      </List>
    </Wrapper>
  );
};
