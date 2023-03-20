import { Wrapper } from "./styled";
import { Images } from "./styled";
import { Footer } from "../../../HomePage/Footer";
import { Container } from "./styled";

import photo2 from "../../../../common/Images/Family/family (2).jpg";
import photo3 from "../../../../common/Images/Family/family (3).jpg";
import photo4 from "../../../../common/Images/Family/family (4).JPG";
import photo5 from "../../../../common/Images/Family/family (5).JPG";
import photo6 from "../../../../common/Images/Family/family (6).JPG";
import photo7 from "../../../../common/Images/Family/family (7).JPG";
import photo9 from "../../../../common/Images/Family/family (8).JPG";
import photo10 from "../../../../common/Images/Family/family (27).jpg";
import photo11 from "../../../../common/Images/Family/family (11).jpg";
import photo12 from "../../../../common/Images/Family/family (25).jpg";
import photo13 from "../../../../common/Images/Family/family (13).jpg";
import photo14 from "../../../../common/Images/Family/family (14).jpg";
import photo16 from "../../../../common/Images/Family/family (16).jpg";
import photo17 from "../../../../common/Images/Family/family (17).jpg";
import photo18 from "../../../../common/Images/Family/family (18).jpg";
import photo19 from "../../../../common/Images/Family/family (19).jpg";
import photo20 from "../../../../common/Images/Family/family (20).jpg";
import photo21 from "../../../../common/Images/Family/family (26).jpg";

function Family() {
  return (
    <Container>
      <Wrapper>

        <Images src={photo3} />
        <Images src={photo4} />
        <Images src={photo5} />
        <Images src={photo2} />
        <Images src={photo7} />
        <Images src={photo9} />
        <Images src={photo10} />
        <Images src={photo13} />
        <Images src={photo14} />
        <Images src={photo16} />
        <Images src={photo18} />
        <Images src={photo11} />
        <Images src={photo19} />
        <Images src={photo20} />
        <Images src={photo21} />
        <Images src={photo17} />
        <Images src={photo12} />
        <Images src={photo6} />


      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Family;
