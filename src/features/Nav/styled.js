import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #27291b33;
  position: fixed;
  width: 100%;
  font-size: 18px;
  letter-spacing: 0.1em;
  line-height: 2;
  z-index: 9999;
  height: 80px;

  @media (max-width: 768px) {
    font-size: 16px;
    background-color: transparent;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @media (max-width: 990px) {
    flex-flow: column nowrap;
    background-color: #ccc;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    padding: 15px;
    margin-right: 0;
    transition: transform 0.3s ease-in-out;
  }
`;
export const Element = styled.li`
  padding: 5px 15px;
  @media (max-width: 990px) {
    padding: 10px 10px;
    margin-top: 20px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  &:hover {
    color: #c9a154bf;
  }
  @media (max-width: 990px) {
    color: black;
    &:hover {
      color: #c9a154bf;
    }
  }
`;
export const StyledLogo = styled.div`
  margin-top: -20px;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const StyledLogo2 = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: block;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
