import styled from "styled-components";
import family from "../../../../common/Images/sesjerodzinne.png";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;
export const Header = styled.div`
  background-image: url("${family}");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 45vw;
`;
export const Tile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  justify-items: center;
  @media (max-width: 576px) {
    padding: 10px;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
export const Images = styled.img`
  width: 70%;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  margin: 0 auto;
`;
export const Paragraph = styled.p`
  color: #3c3c3c;
  padding: 50px;
  letter-spacing: 1.4px;
  line-height: 1.4;
  text-align: start;
  @media (max-width: 576px) {
    padding: 25px;
  }
  b {
    color: #d8b763;
  }
`;

export const ImagesBox = styled.div`
  display: flex;
  justify-content: center;
`;
