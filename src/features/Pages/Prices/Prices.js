import {
  Button,
  Box,
  Images,
  Paragraph,
  Title,
  Wrapper,
  Container,
  Frame,
} from "./styled";

import photo9 from "../../../common/Images/photo9.jpg";
import photo6 from "../../../common/Images/photo6.jpg";
import photo17 from "../../../common/Images/photo17.jpg";
import photo7 from "../../../common/Images/photo13.jpg";
import photo16 from "../../../common/Images/photo16.jpg";
import photo14 from "../../../common/Images/photo14.jpg";
import photo18 from "../../../common/Images/photo18.jpg";
import { Footer } from "../../HomePage/Footer";

export const Prices = () => (
  <Container>
    <Wrapper>
      <Box>
        <Frame>
          <Images src={photo9} alt="sesje rodzinne" />
          <Button>Zobacz więcej</Button>
        </Frame>
        <Paragraph>
          <Title>Sesje rodzinne</Title>
          Sesje rodzinne wykonuję w plenerze i w Waszych domach. Dzieci w każdym
          wieku mogą brać udział w sesji. A może sesja pokoleniowa? Nie ma
          problemu!
        </Paragraph>
      </Box>
      <Box>
        <Frame>
          <Images src={photo6} alt="sesje ciążowe" />
          <Button>Zobacz więcej</Button>
        </Frame>
        <Paragraph>
          <Title>Sesje ciążowe</Title>
          Sesje ciązowe są niezapomnianą pamiątką zarówno dla przyszłych
          rodziców jak i dla dziecka.Zapraszam Was - zarówno Mamy jak i Waszych
          partnerów/ mężów na niezapomniane przeżycie jakim jest sesja ciążowa.
          A jeśli posiadacie już pociechy to zapraszam razem z nimi.
        </Paragraph>
      </Box>
      <Box>
        <Frame>
          <Images src={photo17} alt="sesje noworodkowe" />
          <Button>Zobacz więcej</Button>
        </Frame>
        <Paragraph>
          <Title>Sesje noworodkowe lifestyle</Title>
          Sesje noworodkowe najlepiej wykonać do pierwszego miesiąca życia
          maluszka, jednak sesje lifestalowe dla mnie nie mają takiego
          ograniczenia. Zdjęcia wykonuję w Waszym domu, gdzie maluch czuje się
          najlepiej.
        </Paragraph>
      </Box>
      <Box>
        <Frame>
          <Images src={photo7} alt="sesje dziecięce" />
          <Button>Zobacz więcej</Button>
        </Frame>
        <Paragraph>
          <Title>Sesje dziecięce</Title>
          Sesje dziecięce wykonuję w plenerze. Dzieci tak szybko dorastają,
          dlatego zdjęcia są jedyną formą która pozwala nam wracać do wspomnień
          tego pięknego okresu dzieciństwa. Razem stworzymy pamiątkę zarówno dla
          Was rodziów jak i dla dzieci gdy już dorosną.
        </Paragraph>
      </Box>
      <Box>
        <Frame>
          <Images src={photo14} alt="photo14.jpg" />
          <Button href="Ulotne-Chwile-Filipiak-Fotografia#/portfolio">
            Zobacz więcej{" "}
          </Button>
        </Frame>
        <Paragraph>
          <Title>Sesje par</Title>
          Miłość, ah miłość. Uczucia warto uwieczniać na fotografiach. Zapraszam
          Was w plener lub spotykamy się w Waszych czterech kątach. Podczas
          sesji uwiecznię wszystko co najpiękniejsze w miłości!
        </Paragraph>
      </Box>
      <Box>
        <Frame>
          <Images src={photo16} alt="sesje indywidualne" />
          <Button>Zobacz więcej</Button>
        </Frame>
        <Paragraph>
          <Title>Sesje indywidualne</Title>
          Oczywiście każdy z nas czasem potrzebuje zdjęć z samym sobą. Zdjęcia
          do portfolio,cv czy na socjalmedia to idelna okazja do wspólnego
          wyjścia w plener.
        </Paragraph>
      </Box>
      <Box>
        <Frame>
          <Images src={photo18} alt="reportaże okolicznościowe" />
          <Button>Zobacz więcej</Button>
        </Frame>
        <Paragraph>
          <Title>Reportaże okolicznościowe</Title>
          Ślub , chrzest dziecka, wieczór panieński a może urodziny? Chętnie
          uwiecznie te niezapomniane chwile właśnie dla Was. Poniższy cennik nie
          dotyczy reportaży. Cenę ustalamy indywidualnie
        </Paragraph>
      </Box>
    </Wrapper>
    <Footer />
  </Container>
);
