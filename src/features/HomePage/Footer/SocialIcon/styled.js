import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 20px;
`;

export const Item = styled.li`
  margin: 8px;
`;

export const Link = styled.a`
  cursor: pointer;
  color: #25252599;
  &:hover {
    color: #7f8b7f;
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: 50px;
  width: 50px;
`;
