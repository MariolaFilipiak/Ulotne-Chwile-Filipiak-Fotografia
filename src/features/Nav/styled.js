import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #27291b33;
  position: fixed;
  width: 100vw;
  font-size: 18px;
  letter-spacing: 0.1em;
  line-height: 2;
  z-index: 9999;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 12px;
    justify-content: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-right: 20px;

  @media (max-width: 990px) {
    flex-flow: column nowrap;
    background-color: #ccc;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    padding: 10px;
    margin-top: 10px;
    margin-right: 0;
    transition: transform 0.3s ease-in-out;
  }
`;
export const Element = styled.li`
  margin-top: 15px;
  padding: 15px 15px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  &:hover {
    color: #bfbfbf;
  }
  @media (max-width: 990px) {
    color: black;
    &:hover {
      color: #c0c1aeb3;
    }
  }
`;
