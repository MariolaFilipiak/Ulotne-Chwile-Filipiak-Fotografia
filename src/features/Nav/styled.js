//import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff94;
  position: fixed;
  width: 100%;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 2;
  z-index: 9999;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: flex-end;
  margin: 20px;
`;
export const Element = styled.li`
  padding: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
