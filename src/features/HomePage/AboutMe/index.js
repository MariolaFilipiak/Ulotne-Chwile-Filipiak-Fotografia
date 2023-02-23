import { Description, Paragraph, Photo, Wrapper,} from "./styled";
import camera from "../../../common/Images/camera.jpg"


export const AboutMe = () => (
   <Wrapper>
     <Photo src={camera} alt="photo"/>
  <Description>Cześć! Jestem Mariola i jestem fotografem rodzinnym
  <Paragraph>Zajmuję się fotografią rodzinną w szerokim pojęciu tego znaczenia.
    Nie obce mi są zabawy z dziećmi podczas sesji czy szalone imprezy rodzinne.
    Zapraszam Cię na sesję . Razem stworzymy wspaniałe zdjęcia, które będą pamiątką na resztę życia    </Paragraph>
  </Description>
   
   </Wrapper>
      
)