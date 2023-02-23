import { Burger } from "./Burger";
import { RightNav } from "./RightNav";
import { Element, List,StyledNavLink, Wrapper} from "./styled";

export const Nav = () => {
  return (
    <Wrapper >
    <List>
      <Element>
        <StyledNavLink to="/">Strona Główna</StyledNavLink>
      </Element>
      <Element>
        <StyledNavLink to="portfolio">Portfolio</StyledNavLink>
      </Element>
      <Element>
        <StyledNavLink to="prices">Cennik</StyledNavLink>
      </Element>
      <Element>
        <StyledNavLink to="contact">Kontakt</StyledNavLink>
      </Element>
    </List>
  </Wrapper>
  )
}