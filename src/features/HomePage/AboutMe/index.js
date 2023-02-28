import { Description, Paragraph, Photo,Wrapper } from "./styled";
import liść from "../../../common/Images/Liść.png";


export const AboutMe = () => (
  <Wrapper>
    <Photo src={liść} alt="photo" />
    <Description>
      Naturalna fotografia rodzinna
      <Paragraph>
       Zajmuję się fotografią rodzinną w szerokim pojęciu tego znaczenia. Nie
        obce mi są zabawy z dziećmi podczas sesji czy szalone imprezy rodzinne.
        Zapraszam Cię na sesję . Razem stworzymy wspaniałe zdjęcia, które będą
        pamiątką na resztę życia.<br/>
      </Paragraph>
    </Description>

  </Wrapper>
);
