import { Element, List, StyledNavLink, Wrapper, StyledLogo } from "./styled";

export const RightNav = ({ open }) => {
  return (
    <Wrapper>
      <List open={open}>
        <Element>
          <StyledNavLink to="/">Strona Główna</StyledNavLink>
        </Element>
        <Element>
          <StyledNavLink to="prices">Oferta</StyledNavLink>
        </Element>
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
