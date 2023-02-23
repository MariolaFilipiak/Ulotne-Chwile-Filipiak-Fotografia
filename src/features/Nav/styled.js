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
    font-size:12px;
    justify-content: center;
}
`;


export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: flex-end;
  text-transform: uppercase;
  margin: 20px;

  @media(max-width: 768px){
    flex-flow: column nowrap;
    align-items: flex-end;
    background-color: black;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    padding-top:3.5rem;
    transition: transform 0.3s ease-in-out;
    
  }
`;
export const Element = styled.li`
  padding: 10px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover{
    color:#c0c1aeb3;
  }
`;
