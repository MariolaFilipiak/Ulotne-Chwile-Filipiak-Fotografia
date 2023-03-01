import { Footer } from "../../../HomePage/Footer";
import { Wrapper, Container, Images } from "../Family/styled";

import photo1 from "../../../../common/Images/Kids/Kids (1).jpg";
import photo2 from "../../../../common/Images/Kids/Kids (2).JPG";
import photo3 from "../../../../common/Images/Kids/Kids (3).jpg";
import photo4 from "../../../../common/Images/Kids/Kids (4).JPG";
import photo5 from "../../../../common/Images/Kids/Kids (5).JPG";
import photo6 from "../../../../common/Images/Kids/Kids (6).jpg";
import photo7 from "../../../../common/Images/Kids/Kids (7).jpg";
import photo8 from "../../../../common/Images/Kids/Kids (8).jpg";
import photo9 from "../../../../common/Images/Kids/Kids (9).jpg";
import photo10 from "../../../../common/Images/Kids/Kids (10).jpg";
import photo11 from "../../../../common/Images/Kids/Kids (11).JPG";
import photo12 from "../../../../common/Images/Kids/Kids (12).jpg";
import photo13 from "../../../../common/Images/Kids/Kids (13).jpg";
import photo14 from "../../../../common/Images/Kids/Kids (14).jpg";
import photo15 from "../../../../common/Images/Kids/Kids (15).jpg";
import photo16 from "../../../../common/Images/Kids/Kids (16).jpg";
import photo17 from "../../../../common/Images/Kids/Kids (17).jpg";
import photo19 from "../../../../common/Images/Kids/Kids (19).jpg";

function Kids() {
  return (
    <Container>
      <Wrapper>
        <Images src={photo1} />
        <Images src={photo2} />
        <Images src={photo3} />
        <Images src={photo4} />
        <Images src={photo5} />
        <Images src={photo6} />
        <Images src={photo7} />
        <Images src={photo8} />
        <Images src={photo9} />
        <Images src={photo10} />
        <Images src={photo11} />
        <Images src={photo12} />
        <Images src={photo13} />
        <Images src={photo14} />
        <Images src={photo15} />
        <Images src={photo16} />
        <Images src={photo17} />
        <Images src={photo19} />
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Kids;
