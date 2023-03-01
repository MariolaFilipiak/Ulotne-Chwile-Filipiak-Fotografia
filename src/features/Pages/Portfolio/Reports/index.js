import { Footer } from "../../../HomePage/Footer";
import { Wrapper, Container, Images } from "../Family/styled";

import photo1 from "../../../../common/Images/Reports/reports (1).JPG";
import photo2 from "../../../../common/Images/Reports/reports (2).JPG";
import photo3 from "../../../../common/Images/Reports/reports (3).JPG";
import photo4 from "../../../../common/Images/Reports/reports (4).JPG";
import photo5 from "../../../../common/Images/Reports/reports (5).JPG";


function Reports() {
    return (
        <Container>
        <Wrapper>
          <Images src={photo1} />
          <Images src={photo2} />
          <Images src={photo3} />
          <Images src={photo4} />
          <Images src={photo5} />
        </Wrapper>
        <Footer />
      </Container>
    );
  }
  export default Reports;